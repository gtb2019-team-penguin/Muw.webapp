# Muw Project

## frontend

### 開発を始める前に

git cloneしたら、何は無くとも
```
npm install
```
package.jsonに記述されたモジュールをローカルにインストールします

じゃないとsassのコンパイルなどができません

### sassの使い方

terminalで
```
npm run sass
```

#### scss新規作成

`サンプル`という名前のファイルを作りたいとき

1. frontend/src/layoutsフォルダに
    ```
    _サンプル.scss
    ```
    を作成

1. frontend/src/layouts/main.scss内に
    ```
    @import "./サンプル";
    ```
    を記述

3. 適用したいhtmlファイルに
    ```
    <link href='../public/layouts/bundle.css' type="text/css" rel='stylesheet' />
    ```
    を記述

#### コマンド叩いても走らないとき

- node入ってる？
- npmも入ってる？
- `npm install`した？

    - `frontend`フォルダ直下に｀node_modules`フォルダができているはず