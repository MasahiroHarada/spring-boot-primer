# Thymeleaf

このページでは TOP ページのテンプレートファイルを追加します。

ちなみに [Bootstrap](https://getbootstrap.com/) という CSS フレームワークを使用しています。

## テンプレートファイル

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
