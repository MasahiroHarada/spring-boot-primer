# IDEの設定

## Package Explorer の表示方法変更

TODO

## EditorConfig

プロジェクトのルートディレクトリ（```build.gradle``` などが入っている）に、```.editorconfig``` というファイルを作成し、下記の内容を記述してください。

```ini
# プロジェクト内で最も上位のEditorConfig設定ファイル
root = true

[*]
# 改行文字はLFに統一する
end_of_line = lf
# 文字コードはUTF-8
charset = utf-8

# Javaファイルはスペース4つでインデント
[*.java]
indent_style = space
indent_size = 4

# HTML, CSS, JSファイルはスペース2つでインデント
[*.{html, css, js}]
indent_style = space
indent_size = 2
```

## 空白文字の表示

TODO

## Code Folding の無効化

TODO

## SQL ファイルの紐付け

TODO
