var gulp = require('gulp');
var css = require('gulp-sass');
gulp.task('css',function(){
    gulp.src('./src/scss/*.scss')
    .pipe(css())
    .pipe(gulp.dest('./src/css'))
})
gulp.task('change',function(){
    gulp.watch('./src/scss/*.scss',['css'])
})
gulp.task('default',['css','change'])