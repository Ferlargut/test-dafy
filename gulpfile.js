var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var raiz = {
    fuente: './src/',
    destino: './public/',
};
var caminos = {
    assets: 'assets/',
    html: './*.html',
    js: './*.js',
    sass: 'scss/*.scss',
    mainSass: 'scss/main.scss',
    mainJs: 'js/main.js',
};
var fuentes = {
    assets: raiz.fuente + caminos.assets,
    html: raiz.fuente + caminos.html,
    sass: caminos.assets + caminos.sass,
    js: caminos.assets + caminos.js,
    rootSass: raiz.fuente + caminos.assets + caminos.mainSass,
    rootJS: raiz.fuente + caminos.assets + caminos.mainJs,
};
gulp.task('html', function () {
    gulp.src(fuentes.html)
    .pipe(gulp.dest(raiz.destino));
});
gulp.task('sass', function () {
   gulp.src(fuentes.rootSass)
   .pipe(sass({
       outputStyle: "compressed"
   }).on("error", sass.logError))
    .pipe(gulp.dest(raiz.destino + caminos.assets + "css")); 
});
gulp.task('js', function () {
    gulp.src(fuentes.rootJS)
    .pipe(browserify())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(raiz.destino + caminos.assets + "js"));
});
gulp.task("sass-v",['sass'], function (done) {
    browserSync.reload();
    done();
});
gulp.task("js-v",['js'], function (done) {
    browserSync.reload();
    done();
});
gulp.task("html-v",['html'], function (done) {
    browserSync.reload();
    done();
});
gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: raiz.destino
        }
    });
    gulp.watch(fuentes.html, ["html-v"]);
    gulp.watch(fuentes.js, ["js-v"]);
    gulp.watch(fuentes.sass, ["sass-v"]);
});