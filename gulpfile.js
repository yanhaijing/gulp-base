/**
 * @file 配置文件
 * @author yanhaijing.com
 * @date 2015年12月26日 17:26:48
 */

var dist = 'dist';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');
var babel = require('gulp-babel');
var sass = require('gulp-ruby-sass');
var concat  = require('gulp-concat');
var notify = require('gulp-notify');

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
    gulp.src('app/**.html')
        .pipe(gulp.dest(dist))
});

// image
gulp.task('image', function() {
    gulp.src('app/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(gulp.dest(dist))
});

// scss
gulp.task('sass', function() {
    sass('app/css/**.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest(dist + '/css'))
});

// css
gulp.task('css', function() {
    gulp.src('app/css/**.css')
        .pipe(gulp.dest(dist + '/css'))
});

// style
gulp.task('style', function (){
    gulp.start('sass', 'css')
});

// js
gulp.task('js', function() {
    gulp.src('app/js/**.js')
        .pipe(gulp.dest(dist + '/js'))
});

// es
gulp.task('es', function() {
    return gulp.src('app/js/**.es')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(dist + '/js'))
});

//script
gulp.task('script', function (){
    gulp.start('es', 'js')
});

// browserSync
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: dist
        },
    })
});

gulp.task('dev', ['html', 'image', 'style', 'script'], function (){
});

// gulp.task('build', [`clean`, `sass`, `useref`, `images`, `fonts`], function (){
//     console.log('Building files');
// });

// default
gulp.task('default', [], function() {
    gulp.start('dev')
});

// watch
gulp.task('watch', ['browserSync'], function() {
    gulp.watch('app/**', ['dev'])
    gulp.watch(dist + '/**', browserSync.reload)
});

