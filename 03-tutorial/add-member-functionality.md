# メンバー追加機能を実装しよう

このページではメンバーの追加機能を実装します。

## Mapper

まずはマッパーの設定を追加します。

### MemberMapper.java

```add``` メソッドを追加します。

```java
@Mapper
public interface MemberMapper {
    List<Member> all();
    List<Member> findByNameLike(String words);
    void add(Member member);
}
```

INSERT 文はクエリ結果を返さないので、戻り値型は ```void``` にしています。

### MemberMapper.xml

続いて、```add``` メソッドに対応する SQL を定義します。

```xml
<mapper namespace="com.example.search.mappers.MemberMapper">
    <!-- 中略 -->
    <insert id="add" parameterType="com.example.search.domains.Member">
        INSERT INTO members(name) VALUES (#{name});
    </insert>
</mapper>
```

今回は ```<select>``` の代わりに ```<insert>``` を使用します。

また ```parameterType``` は基本型ではなく ```Member``` 型ですので、```com``` から始まるパッケージ名で指定する必要があります。

もう一点注目してほしいのは、引数の展開方法です。```#{name}``` というようにプロパティ名で記述します（```${member.name}``` **ではない**）。

## Controller

```java
// 追加分のみ記載
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MemberController {

    // 中略（変更なし）

    @GetMapping("/create")
    public String showCreateForm() {
        return "create";
    }

    @PostMapping("/create")
    public String create(@RequestParam("member_name") String name) {
        Member member = new Member(name);
        memberMapper.add(member);
        return "redirect:/";
    }
}
```

### showCreateForm メソッド

このメソッドは入力画面を返すだけなのでシンプルです。

### create メソッド

このメソッドは POST 送信を受け取るメソッドです。

ポイントは2つあります。

#### ポイント1：POST データを受け取る



#### ポイント2：リダイレクト



## Domain

コントローラーに ```new Member(name)``` と記述しましたが、```Member.java``` には ```name``` だけを受け取るコンストラクタがありませんので、追加しましょう。

```java
package com.example.search.domains;

public class Member {
  // 中略（変更なし）

  public Member(String name) {
      this.name = name;
  }

  // 中略（変更なし）
}
```

## Template

```src/main/template``` に ```create.html``` を追加します。

このテンプレートは Thymeleaf の機能は使っていませんね。

```html
<!doctype html>
<html lang="ja" xmlns:th="http://www.thymeleaf.org">
<head>
  <meta charset="UTF-8" />
  <title>Demo</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />
</head>
<body>

  <header class="mb-4">
    <nav class="navbar navbar-light bg-light">
      <a href="/" class="navbar-brand">Spring Demo</a>
    </nav>
  </header>

  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">

        <div class="card">
          <div class="card-body">
            <form action="/create" method="post">
              <div class="form-group">
                <label for="member_name">名前</label>
                <input type="text" class="form-control" id="member_name" name="member_name" required />
              </div>
              <div class="text-right">
                <button class="btn btn-primary" type="submit">追加する</button>
              </div>
            </form>
          </div><!-- .card-body -->
        </div><!-- .card -->

        <div class="mt-3">
          <a href="/">TOP画面へ</a>
        </div>

      </div><!-- .col -->
    </div><!-- .row -->
  </div>

</body>
</html>
```