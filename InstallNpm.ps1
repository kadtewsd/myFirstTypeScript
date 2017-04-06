# npm を最新版
npm install -g npm
# npm の設定ファイルを作成
npm init
# gulp のインストール
npm install -g gulp --save
# bower (クライアントの JS のパッケージマネージャ) をインストール
npm install bower -g --save
# TypeScript のインストール
npm install -g typescript --save
# ローカルにインストールしないと見つからない
npm install typescript --save
# ローカルの Gulp
cd projectRoot
npm install gulp --save
npm install gulp-less  gulp-typescript --save
npm install -g typings
# 型情報を入手
# typings init # typings.json が作成される.
# typings はもう古い。typings をインストールせず、@type を npm でインストールする
npm install -D @types/angular --save
npm install -D @types/angular-route --save
npm install -S @types/jquery --save
# グローバルがついているので、エラー
# typings install dt~jquery dt~angular dt~angular-route --global --save
# typings install dt~jquery --global --save
# typings install dt~angular dt~angular-route --save
# 依存関係を読み込み
npm install
# Bowerを設定
bower install jquery bootstrap angular angular-route --save
