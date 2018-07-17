# モックアップ

## HTML

### 一覧画面

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ToDo</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/app.css">
</head>
<body>
  <header class="mb-5">
    <nav class="navbar navbar-light bg-light">
      <a href="/" class="navbar-brand">ToDo</a>
    </nav>
  </header>
  <main>
    <div class="todo-container">

        <h1 class="h3 mb-4">タスク一覧</h1>

        <table class="table table-bordered mb-3">
          <thead>
            <tr>
              <th>状態</th>
              <th>タスク</th>
              <th>期限</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">
                <span class="badge badge-pill badge-success">完了</span>
              </td>
              <td>Springの勉強</td>
              <td class="text-center">2018/08/22</td>
              <td class="text-center">-</td>
            </tr>
            <tr>
              <td class="text-center">
                <span class="badge badge-pill badge-light">未完了</span>
              </td>
              <td>JavaScriptの勉強</td>
              <td class="text-center">2018/08/22</td>
              <td class="text-center">
                <form action="#">
                  <button class="btn btn-sm btn-primary" type="submit">OK</button>
                </form>
              </td>
            </tr>
            <tr>
              <td class="text-center">
                <span class="badge badge-pill badge-light">未完了</span>
              </td>
              <td>来期目標提出</td>
              <td class="text-center">2018/08/22</td>
              <td class="text-center">
                <form action="#">
                  <button class="btn btn-sm btn-primary" type="submit">OK</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-right">
          <a href="/add.html" class="btn btn-outline-primary">タスクを追加する</a>
        </div>

      </div>
  </main>
</body>
</html>
```

### 追加画面

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ToDo</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/app.css">
</head>
<body>
  <header class="mb-5">
    <nav class="navbar navbar-light bg-light">
      <a href="/" class="navbar-brand">ToDo</a>
    </nav>
  </header>
  <main>
    <div class="todo-container">

      <h1 class="h3 mb-4">タスクを追加する</h1>

      <div class="card">
        <div class="card-body">
          <form action="#">
            <div class="form-group">
              <label for="title">タイトル</label>
              <input class="form-control" type="text" id="title" name="title" />
            </div>
            <div class="form-group">
              <label for="limit">期限</label>
              <input class="form-control" type="date" id="limit" name="limit" />
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <a href="/" class="btn btn-outline-primary">戻る</a>
              <button class="btn btn-primary" type="submit">追加する</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </main>
</body>
</html>
```

## CSS

```css
.todo-container {
  margin: 0 auto;
  max-width: 840px;
  padding: 0 2%;
}

.table th {
  text-align: center;
}

.table td {
  vertical-align: middle;
}
```
