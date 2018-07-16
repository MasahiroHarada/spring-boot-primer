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

### ファイルの追加

Package Explorer を確認してください。「com.example.search」の下に「controllers」というパッケージが作成されているはずです。

次はその「controllers」を右クリックして「New」→「Class」を選択します。ダイアログが表示されますので「Name」に「HelloController」と入力して「Finish」をクリックします。

```HelloController.java``` が作成されているはずですので、以下のコードを書いてください。ただ書き始める前にひとつ注意点です。**import 文を手入力しない**ようにしてください。import 文はエディタの機能で自動補完できますし、そちらの方が早くて正確です。とりあえず import 文は飛ばして入力しましょう。

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

import 文を飛ばして入力できたら「@Controller」「@GetMapping」の下にエラーを示す赤い下線が引かれているはずです。ここでショートカットキー ```Ctrl + Shift + O``` を入力すると、import 文が自動的に挿入されます。エラーの赤線も消えたでしょう。

### コード解説

さて、ここで少し先ほど追加したコードの説明をします。

#### アノテーション

だいたい基本的なコードというか、クラスにメソッドが定義されているだけですが、「**@Controller**」「**@GetMapping**」という記述が目に止まるのではないでしょうか。

この「@Xxx」という言語機能は**アノテーション**と言います。アノテーションはクラスやプロパティ、メソッドに付加することができ、コンパイル時にアノテーション側で定義した特定の処理を実行するための機能です。

「@Controller」と「@GetMapping」は import 文を見てわかるように、どちらも Spring フレームワークが提供するアノテーションです。クラスに「@Contorller」アノテーションが付加されているとコンパイル時に HTTP リクエストの受け取りなど Spring フレームワーク内でコントローラークラスが持つべきとされる機能が追加されます[^1]。

続いて「@GetMapping」ですが、これはルーティングの機能を果たしています。つまり、引数の URL と Java 側のメソッドを紐づけます。結果として URL への GET リクエストを受信したときにメソッドが実行されます。ちなみにご想像の通り「@PostMapping」もあります。

上記の例でいうと、アプリケーションが ```/hello``` への GET リクエストを受け取ると ```index``` メソッドが実行されます。

メソッド名に関しては Spring 側での規約はありません。Java 的に OK なメソッド名であれば任意の名前で構いません。アノテーションさえ付いていればリクエストとのマッピングが行われます。

* クラスに「@Controller」を付ける。
* メソッドに「@GetMapping」「@PostMapping」を付けて リクエスト URL + HTTP メソッドを紐付ける。

[^1]: コントローラーとしての基本機能が定義された親クラスを継承するスタイルでも同様のことは実現できそうですが、一般的に継承関係が深くなると複雑性が増してよろしくないと言われていますので、アノテーションを用いた Spring のスタイルはよりシンプルな表現と言えるでしょう。

#### 戻り値

次に戻り値を見てみましょう。

