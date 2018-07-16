# DB マイグレーション

## DB マイグレーションとは

DB マイグレーションとは、テーブル定義を管理する仕組みのことです。

アプリケーションを開発するにあたって、テーブル定義はしばしば変更されるものです。実装着手前の設計段階で変更のない完璧なテーブル定義を作成することは不可能です。初期フェーズの開発中においてさえ設計の変更（テーブルやカラムの追加）は発生しますし、リリースした後もアプリケーションの成長（＝機能追加、仕様変更）に合わせてテーブル定義も当然変化します。

そこで、変遷するテーブル定義を管理する必要が出てきます。DB マイグレーションツールはたいてい、**どのような SQL をどの順番で実行したか**を管理します。そして実行される SQL 文[^1]はアプリケーションのプロジェクトディレクトリに含まれます。つまりアプリケーションコードと同様に**バージョン管理下に置かれ共有される**ということです。

ある環境にアプリケーションをリリースするときやチームに新しいメンバーを迎えるとき、このようにテーブル定義の管理がされていると、データベースをあるべき状態に再現することが容易になります。

[^1]: マイグレーションツールによっては SQL 文ではなく、独自のクラスや設定ファイルでテーブルの状態や変更を表現する場合もあります。

## Flyway

DB マイグレーションを実現するためのライブラリはいくつかあるようですが、今回はその中で **Flyway** というライブラリを使用します。

### 設定

#### application.properties

最後の行の ```spring.flyway.enabled``` に ```true``` を指定します。

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/spring-demo
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.datasource.driverClassName=org.postgresql.Driver

spring.flyway.enabled=true
```

#### SQL

```src/main/resources``` の下に ```db/migration``` というディレクトリを作成してください。そしてそのなかに ```V1__Create_members.sql``` というファイルを作成してください。Flyway の仕様としてこのファイル名が重要な意味を持つので注意しましょう。

```
V{バージョン番号}__{任意の名前}.sql
```

```V``` は大文字で、バージョン番号の右のアンダースコアは2つ必要です。

SQL ファイルが作成できたら、テーブル定義のページで考えた通りの DDL を記述しましょう。

```sql
CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

### 実行

たいていの DB マイグレーションツールは管理下にある SQL を適切な順番で実行するためのコマンドを持っています。Flyway もコマンドラインからマイグレーションを実行することが可能ですが、今回のように Spring と連携させて使うとさらに便利で、青瓜ケーションの起動と同時にマイグレーションを実行してくれます。

というわけで、アプリケーションを起動しましょう。前章の Hello world からアプリケーションを実行中だった場合は一度停止（画面上の赤い四角をクリックしましょう）し、再度起動してください。

特にエラーがなければマイグレーションは正常に起動しているはずです。

データベースクライアントツールを起動して ```spring-demo``` データベースの内容を確認してみましょう。テーブルが作成されているはずです！

さて、今回は ```members``` テーブルだけを作成したはずですが、もう一つテーブルが作成されていませんか？```flyway_schema_history``` です。実は Flyway が「どのような SQL をどの順番で実行したか」を管理するためテーブルなのです。

```flyway_schema_history``` の中を見てみましょう。

```sql
SELECT * FROM flyway_schema_history;
```

|カラム|値|
|:---:|:---:|
|installed_rank|1|
|version|1|
|description|Create members|
|type|SQL|
|script|V1__Create_members.sql|
|checksum|92065422|
|installed_by|postgres|
|installed_on|2018-07-15 18:02:17.283061|
|execution_time|8|
|success|true|

すべてカラムの解説はしませんが、```installed_rank``` や ```script```、```installed_on``` といったカラムから「いつどのような SQL をどの順番で実行したか」を管理している様子がうかがえるのではないでしょうか。


