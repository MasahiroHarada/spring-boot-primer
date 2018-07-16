# WAFの仕組み

コードを書く前に WAF（**W**eb **A**pplication **F**ramework）について説明します。

## フレームワークとは

EC サイトでも SNS でもニュースサイトでも求人サイトでも、Web アプリケーションに共通して必要な処理があります。

例えば…

* リクエスト URL に基づいて特定の処理をよびだす
* ユーザーの認証を行う
* 入力値のバリデーションを行う
* データベースに接続する
* テンプレートにデータを流し込みHTMLを生成する
* レスポンスメッセージを作成する

などです。

これらの共通処理をまとめたプログラム群が Web アプリケーションフレームワークと呼ばれます。フレームワークが提供する共通処理部分を自前で書く必要がなくなるので生産性が高くなります。

## MVC モデル

TODO

## 様々な WAF

言語によっていくつかの WAF が開発されています。

* Java
    * Spring
    * Play
* PHP
    * Laravel
    * CakePHP
* Ruby
    * Ruby on Rails
    * Sinatra
* Python
    * Django
    * Flask
* C#
    * .NET MVC
* JavaScript
    * Express
    * Hapi


