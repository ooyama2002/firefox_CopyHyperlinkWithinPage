# CopyHyperlinkWithinPage
`CopyHyperlinkWithinPage` はfirefox用のアドオンです。  
アクティブなタブのページ内のハイパーリンクをクリップボードにコピーします。  

## ダウンロードページ
[CopyHyperlinkWithinPage – 🦊 Firefox (ja) 向け拡張機能を入手](https://addons.mozilla.org/ja/firefox/addon/copyhyperlinkwithinpage/)

## 使い方
![readme_image_01](https://github.com/user-attachments/assets/636d99e2-0315-4fc1-9414-5056af66c2c9)  
![readme_image_02](https://github.com/user-attachments/assets/668c4641-22d9-4ab8-980c-82efbd39aa4f)  
![readme_image_03](https://github.com/user-attachments/assets/37df916d-8974-4454-ac65-5bb3543d9c8a)  

## 詳細
ドキュメント内の&lt;a&gt;タグを検索してリンクテキストとハイパーリンクをクリップボードにコピーします。  
```
<a href="ハイパーリンク">リンクテキスト</a>  
```

html
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
```
グーグルへのリンク
https://www.google.co.jp/

ヤフージャパンへのリンク
https://www.yahoo.co.jp/
```
