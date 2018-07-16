# ドメインクラス

まず ```com.example.search``` 配下に ```domains``` パッケージを新たに作成してください。そしてそこに ```Member.java``` クラスファイルを作成しましょう。

```java
package com.example.search.domains;

public class Member {

    private int id;
    private String name;

    public Member(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

```Ctrl + Alt + S```

![STS Generate code](/assets/sts-generate-code.png)

