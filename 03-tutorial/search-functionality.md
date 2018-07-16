# 検索機能を実装しよう

このページでは

## Mapper

### MemberMapper.java

```findByNameLike``` メソッドを追加します。

```java
@Mapper
public interface MemberMapper {
    List<Member> all();
    List<Member> findByNameLike(String words);
}
```

members テーブルの name 列に対して引数の文字列で LIKE 検索を発行するメソッドです。

### MemberMapper.xml

XML には ```findByNameLike``` メソッドに対応する SQL を定義します。

```xml
<mapper namespace="com.example.search.mappers.MemberMapper">
    <!-- 中略 -->
    <select id="findByNameLike" resultMap="memberResultMap" parameterType="String">
        SELECT * FROM members WHERE name LIKE '%' || #{words} || '%'
    </select>
</mapper>
```

```all``` メソッドと異なるのは、```findByNameLike``` メソッドが引数を取ることです。

```parameterType``` に引数の型を記述します。今回は画面で言うと検索窓に入力した文字列が渡されるので ```String``` です。

そして、SQL 文では ```#{引数名}``` で引数を参照できます。引数名は Mapper インターフェース側で定義した引数名に一致します。

（ちなみに ```||``` は SQL の機能で文字列結合を行います。最終的に ```LIKE '%あいう%'``` という形で LIKE 検索を行いたいのでこのように記述しています。）

## Controller

コントローラーには ```/api/members``` と ```/api/members/{words}``` にあたる処理を追加する必要があります。

```java

```

## JavaScript ファイル

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
