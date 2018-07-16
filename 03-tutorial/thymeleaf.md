# テンプレートを追加する

このページでは TOP ページのテンプレートファイルを追加します。

ちなみに [Bootstrap](https://getbootstrap.com/) という CSS フレームワークを使用しています。

## ```index.html```

```src/main/resource/templates``` の下に ```index.html``` を作成して以下の内容を記述してください。というかこれはコピーペーストでいいです。

```html
<!doctype html>
<html lang="ja">
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

      <div class="col">
        <div class="card">
          <div class="card-header">Search</div>
          <div class="card-body">
            <div class="form-group">
              <input type="text" id="words" class="form-control" />
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="card-header">Members</div>
          <ul id="memberList" class="list-group list-group-flush">
            <!-- ここに一覧を表示する -->
          </ul>
        </div>
      </div>

    </div>
  </div>
</body>
</html>
```

## Thymeleaf

### テンプレートエンジンとは

さてここまでは普通の HTML ですが、ここからテンプレートエンジン **Thymeleaf**（タイムリーフ）を使っていきます。

テンプレートとはアプリケーションがレスポンスする HTML の雛形で、制御構文や変数の展開を記述することができます。雛形が同じでもデータを変えることで別のページを作り出せる仕組みですね。

テンプレートエンジンとはテンプレートを HTML に変換するライブラリです。テンプレートエンジンが変わればテンプレートの書き方も変わってきます。例えば JSP もテンプレートエンジンの一種でしょう。今回は Spring と一緒に使われることが多い Thymeleaf というライブラリを使用します。

### 属性の宣言

Thymeleaf を使うために、まずは ```<html>``` タグに記述を追加します。

```html
<html lang="ja" xmlns:th="http://www.thymeleaf.org">
```

Thymeleaf では制御構文や変数の展開を HTML の属性として表現します。上で追加した記述は「Thymeleaf 用の属性を使いますよ」という宣言です。

### ループと変数の展開

ここから本格的に Thymeleaf の機能を使っていきます。```<ul>``` の中に以下の通り ```<li>``` 要素を追加してください。

```html
<ul id="memberList" class="list-group list-group-flush">
  <li class="list-group-item"
      th:each="member : ${members}"
      th:text="${member.name}"
  ></li>
</ul>
```

```class``` は Bootstrap でスタイルを当てるためなので置いておいて、```th:each``` と ```th:text``` に注目してください。```th:xxx``` というのが Thymeleaf の属性です。

#### 変数の展開

```${変数名}``` で変数の展開を行います。

コントローラー側で以下のようにデータを登録しましたね。

```java
model.addAttribute("members", members);
```

第一引数がテンプレート側で参照できる変数名です。```members``` という名前でデータが登録されているので、```"member : ${members}"``` というように ```${変数名}``` でデータを参照できます。

#### th:each

ループ処理を行うのが ```th:each``` です。

書き方は以下の通りです。

```
th:each="1個分の要素 : ${変数名}"
```

例：

```java
String[] numbers = {"one", "two", "three"};
model.addAttribute("data", numbers);
```

```html
<p th:each="item : ${data}">
  <span th:text="item"></span>
</p>
```

このとき、最終的に生成される HTML は以下の通りです。

```html
<p>
  <span>one</span>
  <span>two</span>
  <span>three</span>
</p>
```

#### th:text

```th:text``` は要素内に文字を表示させるための属性です。

```java
String greeting = "Hello";
model.addAttribute("data", greeting);
```

```html
<p th:text="${data}"></p>
```

このとき、最終的に生成される HTML は以下の通りです。

```html
<p>Hello</p>
```

