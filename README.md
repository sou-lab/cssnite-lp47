
# 渡す環境ファイル
[CSS Nite LP47 Coder's High 2016](http://cssnite.jp/lp/lp47/)「イマドキのコーダー環境構築」サンプルファイル


## Usage

### 1. ndenv or nodist のインストール

まずは、Macなら`anyenv`経由で`ndenv`、windowsなら`nodist`をインストールしましょう

#### anyenv
https://github.com/riywo/anyenv
こちらのINSTALLのコマンドを上から実行しanyenvをインストールします。

ndenvをインストールします。

```sh
$ anyenv install ndenv
```

nodeのバージョンを6.6.0にします。

```sh
$ ndenv install v6.6.0
$ ndenv rehash
```

```sh
node -v
```

で v6.6.0と表示されていればOKです。


#### nodist
https://github.com/marcelklehr/nodist
の「Download the installer here」からイントーラーでインストールします。


nodeのバージョンを6.6.0にします

```sh
> nodist + v6.6.0
> nodist v6.6.0 
```

```sh
> node -v
```
で v6.6.0と表示されていればOKです。


### 2. クローン or ダウンロード

gitクローンするか、ファイルをダウンロードしてください。


### 2.npmパッケージのインストール
クローン or ダウンロードしたディレクトリをカレントディレクトにして、

```sh
$ npm install
```

を実行します。
npmのパッケージがインストールされます。


### 3. gulpの実行（Sassのコンパイル）

```sh
$ npm start
```

を実行します。
gulpのタスクが実行されます。   
「dest」ディレクトリが作成され、ベンダープリフィックスが付いて、プロパティの順番が整理されたCSSがコンパイルされてたら成功です。


#### gulp watch


```
$ npm run watch
```
コマンドを実行すると「sass」ディレクトリを監視し、変更があると自動でsassをコンパイルします。



---

### 4. gulpfile.jsにお好みのパッケージを追加してみよう。