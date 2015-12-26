/**
 * @file 配置文件
 * @author yanhaijing.com
 * @date 2015年12月26日 17:26:48
 */

var dist = 'dist';

var gulp = require('gulp');
// var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var del = require('del');

// hello
gulp.task('hello', function() {
    console.log('Hello World!');
});

// clean
gulp.task('clean', function() {
    del(dist);
});

// html
gulp.task('html', function() {
    // img
    gulp.src('app/img/**')
        .pipe(gulp.dest(dist + '/img/'));

    // html
    gulp.src('app/**.html')
        .pipe(gulp.dest(dist));
});

// css
gulp.task('css', function() {
    gulp.src('app/css/**')
        .pipe(gulp.dest(dist + '/css'));
});

// js
gulp.task('js', function() {
    gulp.src('app/js/**.js')
        .pipe(gulp.dest(dist + '/js'));
});

// browserSync
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: dist
        },
    })
});

gulp.task('dev', ['html', 'css', 'js'], function (){
});

// gulp.task('build', [`clean`, `sass`, `useref`, `images`, `fonts`], function (){
//     console.log('Building files');
// });

// default
gulp.task('default', ['dev'], function() {
});

// watch
gulp.task('watch', ['browserSync'], function() {
    gulp.watch('app/**', ['dev']);
    gulp.watch(dist + '/**', browserSync.reload);
});

