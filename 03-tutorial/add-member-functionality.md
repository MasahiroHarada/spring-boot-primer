# メンバー追加機能を実装しよう

## Mapper

### MemberMapper.java

```java
@Mapper
public interface MemberMapper {
    List<Member> all();
    List<Member> findByNameLike(String words);
    void add(Member member);
}
```

### MemberMapper.xml

```xml
<mapper namespace="com.example.search.mappers.MemberMapper">
    <!-- 中略 -->
    <insert id="add" parameterType="com.example.search.domains.Member">
        INSERT INTO members(name) VALUES (#{name});
    </insert>
</mapper>
```

## Controller

```java
package com.example.search.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.search.domains.Member;
import com.example.search.mappers.MemberMapper;

@Controller
public class MemberController {

    // 中略（変更なし）

    @GetMapping("/create")
    public String showCreateForm() {
        return "create";
    }

    @PostMapping("/create")
    public String create(@RequestParam("name") String name) {
        Member member = new Member(name);
        memberMapper.add(member);
        return "redirect:/";
    }
}
```

## Domain

## Template
