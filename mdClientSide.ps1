# プロジェクト配下のクライアントのリソースを追加
md  wwwroot
# TypeScript の型 index.d.ts を格納する
# typings は古い。今は、@type を使う。
# md typings
# TypeScript のソースを配置する。
md src\app\controllers
# TypeScript のコンパイル先
md dist\app\controllers
cd .\wwwroot
# md .\app\scripts\controllers
cd .\app
# md .\styles
md .\views
# bower から取得したファイルを格納する (例 : angular)
md .\bower_components

