# Object-Relational マッパー

前のページでアプリケーションで使うテーブルが揃いました。

## Object-Relational マッパーとは



## ドメインクラス

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

![](/assets/sts-generate-code.png)


## MyBatis

### Mapper インターフェース

```java
package com.example.search.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.search.domains.Member;

@Mapper
public interface MemberMapper {
    List<Member> all();
}
```

### XMLでのクエリマッピング

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.search.mappers.MemberMapper">
    <!-- 結果と結果を受け取るクラスの -->
    <resultMap id="memberResultMap" type="com.example.search.domains.Member">
      <id property="id" column="id" />
      <result property="name" column="name"/>
    </resultMap>
    <!-- SQL -->
    <select id="all" resultMap="memberResultMap">
        SELECT * FROM members
    </select>
</mapper>
```
