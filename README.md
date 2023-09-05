# cleaning-rota-front

## Project setup

``` Project setup
npm install
```

### Compiles and hot-reloads for development

``` Compiles and hot-reloads for development
npm run serve
```

### Compiles and minifies for production

``` Compiles and minifies for production
npm run build
```

### Lints and fixes files

``` Lints and fixes files
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Comments

`npm run serve`の際に`Eslint`チェックが実行される結果ビルド失敗するため、以下のコマンドを`package.json``package-lock.json`から削除。
`Eslint`を追加する場合`"@vue/cli-plugin-babel": "^5.0.8"`の下に以下の記述を追加。

``` @vue/cli-plugin-eslint
"@vue/cli-plugin-eslint": "^5.0.8",
```
