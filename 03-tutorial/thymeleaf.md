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

さてここまでは普通の HTML ですが、ここからテンプレートエンジン **Thymeleaf**（タイムリーフ）を使っていきます。

テンプレートとはアプリケーションがレスポンスする HTML の雛形で、制御構文や変数の展開を記述することができます。雛形が同じでもデータを変えることで別のページを作り出せる仕組みですね。

テンプレートエンジンとはテンプレートを HTML に変換するライブラリです。テンプレートエンジンが変わればテンプレートの書き方も変わってきます。今回は Spring と一緒に使われることが多い Thymeleaf というライブラリを使用します。

Thymeleaf を使うために、まずは ```<html>``` タグに記述を追加します。

```html
<html lang="ja" xmlns:th="http://www.thymeleaf.org">
```

