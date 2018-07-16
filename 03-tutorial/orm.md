# Object-Relational マッピング

前のページでアプリケーションで使うテーブルが揃いました。

このページではアプリケーションからそのテーブルのデータを操作するためのコードを追加します。少し難しいですが、頑張ってください。全体が見えてからのもう一度読み直すと理解しやすいかもしれません。

## Object-Relational マッピングとは

Object-Relational マッピング（ORM）とは、アプリケーションからデータベースの操作をしやすくするためのプログラミング手法です。

オブジェクト指向モデルであるアプリケーション（例：Java）とリレーショナルデータベース（例：PostgreSQL）では、そもそもデータの持ち方が違います。

オブジェクト指向では、クラスがあってプロパティにデータを持ちます。例えば以下のように。

```java
public class User {
    private String email;
    private String password;
    // 中略
}
```

一方リレーショナルモデルでは行と列、つまりテーブルでデータを持ちます。

```
users テーブル
| email           | password |
|-----------------|----------|
| sample@mail.com | test1234 |
```

例えば ```users``` テーブルから取得したデータを、毎回 ```User``` クラスに詰めなおすのは面倒ですね。```User``` クラスのデータを ```user``` テーブルに挿入したい場合も、いちいちプロパティからデータを引っ張ってきて INSERT 文を作るのは面倒です。そこであらかじめアプリ側のデータとテーブル側のデータの紐づけを定義しておこうというのが ORM です。

言葉だけでは理解が難しいと思いますので、コードを書きながら ORM の働きを体得してください。

## ドメインクラス

まず Java 側でデータを入れる箱になるクラスを用意しましょう。このような役割を持つクラスをドメインクラスやエンティティクラス、モデルクラスなどと呼びます。

```com.example.search``` 配下に ```domains``` パッケージを新たに作成してください。そしてそこに ```Member.java``` クラスファイルを作成しましょう。

```java
package com.example.search.domains;

public class Member {

    private int id;
    private String name;

    public Member(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

ここでまた便利なショートカットキーを紹介します。コンストラクタやゲッター・セッターを自動生成するショートカットです。```Ctrl + Alt + S``` を入力してください。以下のダイアログが表示されるでしょう。

![STS Generate code](/assets/sts-generate-code.png)

「Generate Getters and Setters...」や「Generate Constructor using Fields...」を選ぶと対象のプロパティを聞かれるので、チェックを入れて「Finish」をクリックするとコードが自動生成されます。

またここまで読んで、**ドメインクラスひとつがテーブルひとつに対応する**ように作ればいいのか、と考えた方もいるでしょうか。基本的にはその通りです。複雑なアプリケーションになるともちろん例外も出てきますが、まずはテーブルに対応するドメインクラス（またはエンティティまたはモデル）を作成する認識で OK です。

## MyBatis

ORM ライブラリも言語やフレームワークによっていろいろ存在します。Java の世界でもいくつか選択肢がありますが、今回は **MyBatis** というライブラリを使用します。

ここからは MyBatis での実装方法です。ライブラリが変われば実装方法も変わります（ドメインクラスはどのような ORM ライブラリでも大体必要になる）。

また、まずは member テーブルの一覧を取得する機能から実装していく前提で進めます。

### Mapper インターフェース

Java から SQL を発行するための仲介役となるインターフェースおよびメソッドを定義します。

どういうことかというと、

```java
db.exec("SELECT * FROM members");
```

ORM の考え方では上記のような書き方はしないのです。リレーショナルの世界の言葉（SQL）がオブジェクト指向の世界（Java）に入り込んでしまっていて良くないと考えられます。

その代わり Mapper を介して、

```java
memberMapper.all();
```

と書けたほうが、簡単にいうと「Javaっぽくてカッコよくね」というわけです。この ```all``` メソッドを呼んだときに実際にどのような SQL が発行されるかは後述の XML で定義します。

```com.example.search``` 配下に ```mappers``` パッケージを新たに作成してください。そしてそこに ```MemberMapper.java``` インターフェースファイルを作成しましょう。

クラスではなく**インターフェース**なので注意してください。

```java
package com.example.search.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.search.domains.Member;

@Mapper
public interface MemberMapper {
    List<Member> all();
}
```

新しいアノテーション「@Mapper」が登場しましたね。「@Mapper」アノテーションをインターフェースに付加すると、コンパイル時に以下で説明する XML ファイルを読み込んで自動的に具象クラスが作成されます。

ちょっと不思議な感じがするかもしれませんが、最初はそういうもんだと思ってパターンを覚えてしまえばいいでしょう。

### XMLでのマッピング

MyBatis では「アプリ側のデータとテーブル側のデータの紐づけを定義」を XML ファイルで行います。

```src/main/resources``` の下にさらに ```com/example/search/mappers``` というディレクトリ[^1]を作成します。ディレクトリができたらその中に ```MemberMapper.xml``` というファイルを作成し、以下の内容を記述してください。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.search.mappers.MemberMapper">
    <!-- 結果と結果を受け取るクラスの紐づけ -->
    <resultMap id="memberResultMap" type="com.example.search.domains.Member">
      <result property="id" column="id" />
      <result property="name" column="name"/>
    </resultMap>
    <!-- SQL -->
    <select id="all" resultMap="memberResultMap">
        SELECT * FROM members
    </select>
</mapper>
```

XML ファイルの内容を説明していきます。

#### ```<mapper>```

まずルート要素は ```<mapper>``` です。```namespace``` 属性に対応するインターフェースの名前空間を記述しましょう。

```<mapper>``` の子要素が2つありますね。```<resultMap>``` と ```<select>``` です。

#### ```<resultMap>```

```<resultMap>``` は「クエリ結果のどのカラムとクラスのどのプロパティが紐づくか」を定義します。

* ```id``` 属性は後で他の要素から参照するときに使用する ID です。
* ```type``` 属性はアプリ側のデータの入れ物クラス＝ドメインクラスの型名です。```com``` からの完全修飾名でなくてはいけませんので注意してください。

```<resultMap>``` の中には ```<result>``` が並びます。```property``` と ```column``` という2つの属性を持っています。

* ```property``` 属性にはクラスのプロパティ名を記述します。
* ```column``` 属性にはクエリ結果のカラム名を記述します。

#### ```<select>```

```<select>``` は「Mapper のメソッドと SQL の紐づき」を定義します。

```id``` と ```resultMap``` という2つの属性が定義されていますね。

* ```id``` 属性には Mapper 側のメソッド名を記述します。
* ```resultMap``` 属性には SELECT 文の結果をどのクラスにどのように紐づけるかを定義します。ここで ```<resultMap>``` の ```id``` を参照するわけです。

```<select>``` の中には実行したい SQL 文（```<select>``` なので SELECT 文）を記述します。

#### 参考

http://www.mybatis.org/mybatis-3/ja/sqlmap-xml.html#Result_Maps

### まとめると

#### 処理の流れ

1. ```memberMapper.all()``` を実行する。
1. XML で定義された通り、```<select id="all">``` の中の SQL（```SELECT * FROM members```）が発行される。
1. クエリの結果が返ってくる。
1. クエリの結果をどのようにマッピングするかは、```<select>``` の ```resultMap``` 属性に書いてある。ここでは ```memberResultMap``` と記述されているので、```id``` が ```memberResultMap``` である ```<resultMap>``` 要素を参照する。
1. ```<resultMap id="memberResultMap">``` を参照すると、クエリ結果の ```id``` を ```Member``` クラスの ```id``` プロパティに、クエリ結果の ```name``` を ```name``` プロパティに紐づけるよう定義されている。
1. 定義の通りにクエリの結果データが格納されたクラスのインスタンスが生成される。クエリの結果行ごとにインスタンスは生成される。
1. Mapper では ```all``` の戻り値は ```List<Member>``` と定義しているため、```Member``` インスタンスが結果行数ぶん入った
 ```List``` が ```all``` メソッドの呼び出し元に返却される。

文字にすると一見ややこしいようですがロジックやアルゴリズムの問題ではなく、ライブラリのルールとしてどことどこが紐づくかというパズルでしかないので落ち着いて取り組んでみてください。

#### 余談

XML ファイルでマッピングを定義するのは ORM ライブラリの中でも珍しいのではと思います。ただ社内の割と大規模な受託プロジェクトで採用していると聞いたので取り上げました。

[^1]: ディレクトリが重要なので間違わないように注意してください。つまり Mapper インターフェースのパッケージ名「com.example.search.mappers」に合わせたディレクトリ階層にするということです。このルールを守ることで自動的に XML ファイルを検出して読み込んでくれるらしいです。設定で変更することもできるようですが今回は MyBatis の詳細な設定方法までは追いません。
