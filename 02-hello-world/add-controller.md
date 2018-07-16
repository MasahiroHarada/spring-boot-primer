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

Package Explorer を確認してください。「com.example.search」の下に「controllers」というパッケージが作成されているはずです。

次はその「controllers」を右クリックして「New」→「Class」を選択します。ダイアログが表示されますので「Name」に「HelloController」と入力して「Finish」をクリックします。

```HelloController.java``` が作成されているはずですので、以下のコードを書いてください。

```java
package com.example.search.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/hello")
    public String index() {
        return "hello";
    }

}
```



```Ctrl + Shift + O```