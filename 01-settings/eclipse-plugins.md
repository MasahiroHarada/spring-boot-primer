# Eclipse プラグイン

STS なのに Eclipse と言っているのは、いくつかの追加機能以外は Eclipse とまったく同じ IDE だからです。

## Gradle

Gradle はアプリケーションのビルドやパッケージ管理を行うためのツールです。ちなみに Java の世界で使われるビルドツールには他に「Ant」や「Maven」があるらしいです。どれを使うかは現場によりけりなのでしょうね。

さて、STS（ほぼイコール Eclipse）から Gradle を使用するためにはプラグインが必要なので、インストール方法を紹介します。

メニュー「Help」→「Eclipse Marketplace」

![STS](/assets/sts-marketplace.png)

検索窓に「Gradle」と入力し ```Enter``` または「Go」ボタンをクリックすると、検索結果が表示されます。象のアイコンの「Buildship Gradle Integration 2.0」をインストールします。

![STS](/assets/sts-marketplace-gradle.png)

次の画面でライセンスへの同意を求められますので、「Agree」にチェックを入れてインストールを進めます。インストールが始まると最初の画面に戻り、画面の右下に「Installing Software: (○○%)」と表示されます。

![STS](/assets/sts-installing.png)

インストールが終わると変更を反映させるために再起動を求められますので、「Restart Now」で再起動しましょう（他のプラグインをインストールし終わってから再起動してもいいかもしれません）。

![STS](/assets/sts-restart.png)

## Emmet

Emmet とは、

上記「Gradle」の項と同様にインストールしてください。

## SQL ファイルの紐付け

デフォルトでは SQL ファイルを開くと別のエディタが開いてしまうので、