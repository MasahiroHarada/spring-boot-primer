# テンプレート

```src/main/resources/templates``` の下に ```hello.html``` というファイルを追加し、以下の内容を記述してください。

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>Hello</title>
</head>
<body>
  <h1>Hello world!</h1>
</body>
</html>
```

なんの変哲も無い HTML ですね。変数の埋め込みも制御構文もない、一番シンプルな形ですがこれで OK です。

コントローラー側で ```"hello"``` という文字列を返しているので、フレームワーク側で自動的に ```hello.html``` が呼び出され、レスポンスされます。

```java
@GetMapping("/hello")
public String index() {
    return "hello";
}
```

ここまでで Hello world のコードは終わりです。説明が多かったかもしれませんが、書いたコード自体は少なかったでしょう。

次のページでアプリケーションを起動してブラウザで確認してみましょう。
