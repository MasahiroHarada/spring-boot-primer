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