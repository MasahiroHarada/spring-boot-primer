# メンバー追加機能を実装しよう

## Mapper

### MemberMapper.java

```java
@Mapper
public interface MemberMapper {
    List<Member> all();
    List<Member> findByNameLike(String words);
    void add(Member member);
}
```

### MemberMapper.xml

```xml
<mapper namespace="com.example.search.mappers.MemberMapper">
    <!-- 中略 -->
    <insert id="add" parameterType="com.example.search.domains.Member">
        INSERT INTO members(name) VALUES (#{name});
    </insert>
</mapper>
```

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
    public String create(@RequestParam("name") String name) {
        Member member = new Member(name);
        memberMapper.add(member);
        return "redirect:/";
    }
}
```

### showCreateForm メソッド

### create メソッド

## Domain

```com.example.search.domains.Member.java``` にコンストラクタを追加します。

```java
public Member(String name) {
    this.name = name;
}
```

## Template

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
                <label for="name">名前</label>
                <input type="text" class="form-control" id="name" name="name" required />
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