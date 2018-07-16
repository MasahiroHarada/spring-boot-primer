# コントローラー

前置きが少し長くなりましたが、ここから本格的にコードを書いていきます。

まずはコントローラークラスを追加します。

## パッケージの追加

中規模以上のプロジェクトでは MVC やそのほかのクラスの役割に応じてディレクトリ（パッケージ）を分けるのが普通です。今回のチュートリアルは小規模ですがやり方に慣れるために、コントローラークラスを配置するパッケージを作成します。

Package Explorer の「com.example.search」を右クリックするとメニューが表示されますので、「New」→「Package」を選択してください。

![STS Add Controller](/assets/sts-add-controller-1.png)

ダイアログが表示されますので、「Name」に「com.example.search.controllers」と入力してください。「controllers」だけでなく「com.example.search.」も必要ですので注意しましょう。

![STS Add Controller](/assets/sts-add-controller-2.png)

入力できたら「Finish」をクリックして完了です。

## コントローラークラス

パッケージが作成できたら「」

```java
package com.example.search.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

}
```

```Ctrl + Shift + O```