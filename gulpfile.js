var gulp = require('gulp');
var less = require('gulp-less');
var ts = require('gulp-typescript');

// typescript のプロジェクトのルートを指定する。
tsProject = ts.createProject('./tsconfig.json', function() {
  typescript: require('typescript')
});

gulp.task('ts', function() {
  //tsProject.src() takes no arguments - Use gulp.src(..) if you need to specify a glob
  //tsProject.src('./wwwroot/app/scripts/*.ts')
  gulp.src('./src/**/*.ts')
    //ts(tsProject) has been deprecated - use .pipe(tsProject(reporter)) instead
    //.pipe(ts(tsProject))
    .pipe(tsProject())
    .pipe(gulp.dest('./dist'))
});

//Less でコンパイル
gulp.task('less', () => {
    gulp.src(['./src/**/*.less', '!./src/**/_*.less'])
    .pipe(less())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch('./src/**/.less', () => {
        gulp.run('less');
    });
  gulp.watch('./src/**/*.ts', ['ts'])
});

// ts, less のコンパイル。それと変更の監視。
gulp.task('default', ['ts', 'less', 'watch']);
