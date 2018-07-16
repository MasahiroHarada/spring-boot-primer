# DBマイグレーション

**Flyway** という

```src/main/resources```

```db/migration```

```V1__Create_members.sql```

```sql
CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```
