# アプリケーションの設定

```src/main/resources``` に格納されている ```application.properties``` にアプリケーションの設定を記述します。

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/spring-demo
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.datasource.driverClassName=org.postgresql.Driver

spring.flyway.enabled=false
```

```spring.datasource.XXX``` はデータベースに接続するための設定です。```username``` と ```password``` は各自の設定に応じて書き換えてください。

```spring.flyway.enabled``` は Flyway ライブラリを有効化するかどうかの設定です。あとで使いますがとりあえず今は使わないので ```false``` に設定しておきます。

アプリケーションの設定は以上です。
