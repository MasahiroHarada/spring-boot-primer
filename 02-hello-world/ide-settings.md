# IDE の設定

コードを書き始める前に、IDE の設定を変更します。

設定方法は IDE やエディタごとに違いますし、設定の箇所や内容はプロジェクトごとに違うでしょう。ここで覚えて欲しいのは、エンジニアとして快適に、早く、正確に作業できるよう気を配る必要があるということです。

## Package Explorer の表示方法変更

画面の左側に表示されているのが Package Explorer です。プロジェクトに含まれるディレクトリやファイルを表示しています。

### 水平表示から階層表示へ

デフォルトの設定ではパッケージの構造が少し見づらいので変更します。

Package Explorer の右上にある下向きの三角をクリックするとメニューが現れるので、「Package Presentation」→「Hierarchical」を選択します。

![STS Settings Package Explorer](/assets/sts-settings-pe-1.png)

### 隠しファイルを表示する

デフォルトの設定では隠しファイルは表示されません。しかし、```.gitignore``` など設定ファイル系で編集したいファイルもあるので表示できるようにします。

上と同様に下向きの三角をクリックして「Filters...」をクリックすると、さらにダイアログが表示されます。

![STS Settings Package Explorer](/assets/sts-settings-pe-2.png)

「.\* resources」のチェックを**外して**「OK」をクリックします。

## インデントの設定

インデントにタブ文字とスペースのどちらを使うかはプロジェクト次第かと思います。私はどちらかというとスペースが好きです。扱う文字の種類が少ない方がシンプルな気がするからです。

ただ正解はないですし、どちらを使うかよりも「揃える」ことの方が重要です。どちらが好きであろうと後からプロジェクトに参画した場合は規約に従ってください。規約がない場合はコードからルールを読み取ってそちらに合わせましょう。

今回は皆さんもスペースに合わせてみてください。

### 全体

「環境設定」→「Editors」→「Text Editors」

* 「Insert spaces for tabs」にチェック

### Java

「環境設定」→「Java」→「Code Style」→「Formatter」→「Edit」

* 「Tab policy」：「Spaces only」
* 「Indentaion size」：4
* 「Tab size」：4

built-in の設定は上書きできないから設定名を変えて保存しろと言われるので、その通り「Profile name」を任意の名称に変更して「OK」をクリックします。

### JavaScript

「環境設定」→「JavaScript」→「Code Style」→「Formatter」→「Edit」

* 「Tab policy」：「Spaces only」
* 「Indentaion size」：2
* 「Tab size」：2

built-in の設定は上書きできないから設定名を変えて保存しろと言われるので、その通り「Profile name」を任意の名称に変更して「OK」をクリックします。

### CSS

「環境設定」→「Web」→「CSS Files」→「Editor」

* 「Indent using spaces」にチェック
* 「Indentaion size」：2

### HTML

「環境設定」→「Web」→「HTML Files」→「Editor」

* 「Indent using spaces」にチェック
* 「Indentaion size」：2

## 空白文字の表示

空白文字を分かりやすく記号で表示する設定です。

なぜこの設定を行うかというと、スペースでインデントすべきなのにタブでインデントしていたり、スペースで区切るべき箇所に全角スペースを入力してしまっていたりという場合に気付きやすくするためです。

「環境設定」→「General」→「Editors」→「Text Editors」を開いて「Show whitespace characters」にチェックを入れます。

![STS Settings Whitespace](/assets/sts-settings-whitespace-1.png)

さらに「configure visibillity」で見えかたを設定します。

![STS Settings Whitespace](/assets/sts-settings-whitespace-2.png)

* 横軸
    * **Space**：半角スペース
    * **Ideographic space**：全角スペース
    * **Tab**：タブ文字
    * **Carriage Return**：Windows で使用される改行文字
    * **Line Feed**：Linux / Mac で使用される改行文字
* 縦軸
    * **Leading**：文頭
    * **Enclosed**：文中
    * **Trailing**：文末

上の画像は私の設定例です。

全角スペースとタブは基本的に使わない、すなわち検出したい（あったら消したい）ので、文頭・文中・文末すべてで表示させています。

半角スペースは文中のみ非表示にしています。単純に邪魔だからです。文頭はインデントがずれていないか、何文字分か確かめやすいように表示しています。文末のスペースは基本的にいらないので検出できるように表示しています。

改行文字は全行に入ると邪魔ですし Mac だと Carriage Return は入らない（そもそも LF に揃えたい）ので表示させないようにしています（Carriage Return x Trailing にチェックが入っているのは消し忘れです）。

