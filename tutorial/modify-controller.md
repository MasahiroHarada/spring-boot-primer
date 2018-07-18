# コントローラーを作成する

このページではコントローラーを作成します。

```com.example.search.controllers``` に ```MemberController.java``` を追加してください。

まずは TOP 画面から作成します。

```java
package com.example.search.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.search.domains.Member;
import com.example.search.mappers.MemberMapper;

@Controller
public class MemberController {

    private final MemberMapper memberMapper;

    @Autowired
    public MemberController(MemberMapper memberMapper) {
        this.memberMapper = memberMapper;
    }

    @GetMapping("/")
    public String index(Model model) {
        List<Member> members = memberMapper.all();
        model.addAttribute("members", members);
        return "index";
    }
}
```

## ```@Autowired```

まず最初のポイントは ```@Autowired``` アノテーションです。

前のページで作成した ```MemberMapper``` を使用したいわけですが、直接 ```new``` でインスタンス化はしません（そもそも```MemberMapper``` はインターフェースですので ```new``` できません）。代わりにDI（**D**ependency **I**njection：依存性の注入）という方法を使います。

DI はかなり難しいオブジェクト指向のプログラミング手法なので、今すぐに覚えなくて構いません。ただ自分で ```new``` しない方法もある[^1]と知っておいてください。

さて ```@Autowired``` をコンストラクタに付与すると、コンストラクタを実行するときに自動的に引数の型のクラスのインスタンスがコンストラクタに渡されます。

今回の例では、```MemberController``` のインスタンスが生成されるとき、コンストラクタに ```MemberMapper``` のインスタンスが渡されるということです。これを ```MemberController``` のプロパティである ```memberMapper``` に代入しています。

```java
@Autowired
public MemberController(MemberMapper memberMapper) {
    this.memberMapper = memberMapper;
}
```

[^1]: 誤解があるといけないのですが、言語機能としてインスタンス化の方法が ```new``` 以外にあるということではありません。```new``` の実行をいわば「裏側に隠す」プログラミング手法があるということです。

## テンプレートへのデータの受け渡し

次のポイントは、テンプレートへのデータの受け渡しです。

Hello world! の例ではただシンプルな画面を返すだけでしたが、今回はコントローラーで取得したデータをテンプレートに渡す必要があります。

まずは前のページで定義した ```all``` メソッドでメンバーの一覧を取得します。

```java
List<Member> members = memberMapper.all();
```

メンバー一覧の HTML を生成するためにこのデータをテンプレートに渡すには、まず ```org.springframework.ui.Model``` 型のインスタンスを ```index``` メソッドで受け取ります。

```java
public String index(Model model) {
```

誰が ```model``` を渡すの？？と思うかもしれませんが、こういう風に書けばフレームワークが自動的に渡してくれるのです。

```org.springframework.ui.Model``` 型は、テンプレートへの渡すデータの管理を担当しています。```addAttribute``` メソッドを呼んでデータを登録します。

```java
model.addAttribute("members", members);
```

これで、```index.html``` テンプレートで ```members``` という名前でメンバーの一覧データを参照できるようになりました。

次のページではテンプレートを記述します。

