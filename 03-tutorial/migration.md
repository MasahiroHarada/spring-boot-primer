# DBマイグレーション

**Flyway** という

```src/main/resources``` の下に ```db/migration``` というディレクトリを作成してください。そしてそのなかに ```V1__Create_members.sql``` というファイルを作成してください。

ファイル名が重要な意味を持つので注意してください。

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
