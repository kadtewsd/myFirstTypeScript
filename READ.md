1. 実行時に表示する html の指定
今回は wwwroot/app に index.html を作成します。デフォルトだと実行時に wwwroot 直下の index.html を探しに行って404 されてしまうので、 wwwroot/app にある index.html を表示するようにします。
2. JS ファイルを呼び出すときのパスの指定
js ファイルを html の script 要素で読込むときに src="scripts/hoge.js" と指定して扱えるようにします。
3. css ファイルを呼び出すときのパスの指定
css ファイルを html の link 要素で href="styles/fuga.css" と指定して扱えるようにします。
4. html テンプレートを呼び出すときのパスの指定
AngularJS の ngRoute を使ってルーティングする際に、指定するテンプレートのパスを view/piyo.html と指定して扱えるようにします。
