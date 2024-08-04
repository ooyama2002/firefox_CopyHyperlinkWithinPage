# CopyHyperlinkWithinPage
`CopyHyperlinkWithinPage` はfirefox用のアドオンです。  
アクティブなタブのページ内のハイパーリンクをマークダウン、pukiwiki、html 形式でコピーします。  

## ダウンロードページ
[CopyHyperlinkWithinPage – 🦊 Firefox (ja) 向け拡張機能を入手](https://addons.mozilla.org/ja/firefox/addon/copyhyperlinkwithinpage/)

## 使い方
![README_image_01](https://github.com/user-attachments/assets/39cd07d9-ccc5-47fa-84c4-2308c584111b)  
![README_image_02](https://github.com/user-attachments/assets/69633e4a-2c62-49df-aabd-ed7c2d873f68)  
![README_image_03](https://github.com/user-attachments/assets/208cb8d0-cafc-4b38-83b8-017ba2916684)  

## 詳細
ドキュメント内の&lt;a&gt;タグを検索してリンクテキストとハイパーリンクをクリップボードにコピーします。  
```
<a href="ハイパーリンク">リンクテキスト</a>  
```

サンプルのhtml  
```
<!doctype html>
<html lang="ja">

<head>
    <title>サンプルページ</title>
    <meta charset="UTF-8">
</head>

<body>
<a href="https://www.google.co.jp/">グーグルへのリンク</a><br>
<a href="https://www.yahoo.co.jp/">ヤフージャパンへのリンク</a><br>
</body>

</html>
```

コピーされる内容  
normalの場合  
```
グーグルへのリンク
https://www.google.co.jp/

ヤフージャパンへのリンク
https://www.yahoo.co.jp/
```
markdownの場合  
```
[グーグルへのリンク](https://www.google.co.jp/)
[ヤフージャパンへのリンク](https://www.yahoo.co.jp/)
```
pukiwikiの場合  
```
[[グーグルへのリンク:https://www.google.co.jp/]]
[[ヤフージャパンへのリンク:https://www.yahoo.co.jp/]]
```
htmlの場合  
```
<a href="https://www.google.co.jp/">グーグルへのリンク</a>
<a href="https://www.yahoo.co.jp/">ヤフージャパンへのリンク</a>
```
