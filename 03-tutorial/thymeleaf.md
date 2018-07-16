# Thymeleaf

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
            <li class="list-group-item" th:each="member : ${members}"
              th:text="${member.name}"></li>
          </ul>
        </div>
      </div>

    </div>
  </div>

  <script src="/app.js"></script>
</body>
</html>
```

```js
// 検索フォームの値が変わるたびに呼ばれる関数
function search(event) {
  // 検索フォームに入力された値をイベントオブジェクトから取得する
  const words = event.target.value;

  // メンバー一覧を表現する要素を取得する
  const memberList = document.getElementById('memberList');

  // APIのURLを作成する
  const url = '/api/members/' + words;

  // JavaScriptからサーバと通信するためのオブジェクト
  const xhr = new XMLHttpRequest();

  // リクエストを初期化する
  xhr.open('GET', url, true);

  // load（通信完了）イベントに関数を登録する
  // この関数（第2引数）は登録された時点では実行されない
  // あるイベントが発生したタイミングで実行されるこのような関数を「イベントリスナー」と呼ぶ
  xhr.addEventListener('load', function() {
    // サーバからのレスポンス（文字列）をJSONに変換する
    const members = JSON.parse(xhr.responseText);
    // メンバー一覧を書き換える
    let html = '';
    members.forEach(function(member) {
      html += '<li class="list-group-item">' + member.name + '</li>';
    });
    memberList.innerHTML = html;
  });

  // リクエスト発行
  xhr.send();
}

// HTMLの読み込みが完了したタイミングで実行される関数を登録する
window.onload = function() {
  // 検索フォーム要素を取得する
  const wordsInput = document.getElementById('words');
  // inputイベントに上で定義したsearch関数を登録する
  wordsInput.addEventListener('input', search, false);
}
```