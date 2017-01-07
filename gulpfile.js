/*!
 * gulp
 * $ npm install gulp-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache --save-dev
 暂时关闭jshint,webstorm内置了
 */
// Load plugins
let gulp = require('gulp');
let browserSync = require('browser-sync');
//thinkjs启动文件
let devStart = require('./www/development');
gulp.task('browser-sync', function () {
    let files = [
        'view/**/*.html',
        'src/**/*.js',
    ];
    let port = 8360;//thinkjs
    browserSync.init(files, {
        proxy: 'http://localhost:8360',
        notify: false,
        port: 4000
    });
    gulp.watch(files).on("change", browserSync.reload);
});

//相当于命令行
let exec = require('child_process').exec;
function runCommand(command) {
    return function (cb) {
        exec(command, function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
    }
}
let mongoPath = 'E:/program/MongoDB/Server/3.4/bin/mongod.exe ';
let dbPath = ' E:/Github/map_study/db'
let devPath = 'www/development.js'
gulp.task('start-mongo', runCommand(`${mongoPath} --dbpath ${dbPath}`));
gulp.task('start-app', runCommand(`node ${devPath}`));
// Default task
gulp.task('default', function () {
    gulp.start('start-mongo','start-app','browser-sync');
});
