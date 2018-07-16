# Object-Relational マッピング

前のページでアプリケーションで使うテーブルが揃いました。

このページではアプリケーションからそのテーブルのデータを操作するためのコードを追加します。少し難しいかもしれませんが、頑張ってください。

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

```Ctrl + Alt + S```

![](/assets/sts-generate-code.png)


## MyBatis

ORM ライブラリも言語やフレームワークによって様々存在します。Java の世界でもいくつか選択肢がありますが、今回は **MyBatis** というライブラリを使用します。

### Mapper インターフェース

```com.example.search``` 配下に ```mappers``` パッケージを新たに作成してください。そしてそこに ```MemberMapper.java``` インターフェースファイルを作成しましょう。

クラスではなくインターフェースなので注意してください。

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

また新しいアノテーションが登場しましたね。「@Mapper」アノテーションは

### XMLでのクエリマッピング

```src/main/resources``` の下にさらに ```com/example/search/mappers``` というディレクトリを作成します。その中に ```MemberMapper.xml``` というファイルを作成し、以下の内容を記述してください。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.search.mappers.MemberMapper">
    <!-- 結果と結果を受け取るクラスの -->
    <resultMap id="memberResultMap" type="com.example.search.domains.Member">
      <id property="id" column="id" />
      <result property="name" column="name"/>
    </resultMap>
    <!-- SQL -->
    <select id="all" resultMap="memberResultMap">
        SELECT * FROM members
    </select>
</mapper>
```
