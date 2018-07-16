# コントローラーを作成する

このページではコントローラーを作成します。

```com.example.search.controllers``` に ```MemberController.java``` を追加してください。

まずは TOP 画面から作成します。

```java
package com.example.search.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.search.domains.Member;
import com.example.search.mappers.MemberMapper;

@Controller
public class MemberController {

    private final MemberMapper memberMapper;

    @Autowired
    public MemberController(MemberMapper memberMapper) {
        this.memberMapper = memberMapper;
    }

    @GetMapping("/")
    public String index(Model model) {
        List<Member> members = memberMapper.all();
        model.addAttribute("members", members);
        return "index";
    }
}
```

## @Autowired



## テンプレートへのデータの受け渡し

