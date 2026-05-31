# 今月のシロップ帖

果肉入りシロップのアイデアレシピをスマホで見せるためのPWAです。

## 使い方

ローカルで確認する場合:

```sh
python3 -m http.server 4173
```

ブラウザで `http://localhost:4173/syrup-pwa/` を開きます。

GitHub Pagesでは `https://kitanosakura.jp/` で公開します。

## 更新しやすい場所

- 商品情報は `app.js` の `products` にあります。
- レシピの型は `app.js` の `recipeTemplates` にあります。
- 今月の見出しと最初に出すレシピは、アプリ内の「今月の表示を編集」から変更できます。
- 商品画像は `assets/products/` にあります。

## キャッシュ方針

季節ごとの更新をすぐ反映しやすくするため、Service Workerによるオフラインキャッシュは使わない構成です。
