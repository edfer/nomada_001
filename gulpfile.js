'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');

var jsFiles = ["src/scripts/*.js", "src/scripts/**/*.js"];
// var cssFiles = ["src/scss/*.scss"];

gulp.task("default", ["compile-sass", "concat-js"], function(){

    browserSync.init({
        server:"./",
        browser: "google chrome"
    });

    gulp.watch("src/scss/*.scss", ["compile-sass"]);

    gulp.watch("*.html").on("change", browserSync.reload);

    gulp.watch(jsFiles, ["concat-js"]);
});

gulp.task("compile-sass", function(){
    gulp.src("src/scss/style.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(notify({title:"SASS", message:"Compiled!"}))
        .pipe(browserSync.stream());
});

gulp.task("concat-js", function() {
    gulp.src("src/scripts/main.js")
        .pipe(tap(function(file){
            file.contents = browserify(file.path).bundle();
        }))
        .pipe(buffer())
        .pipe(gulp.dest("dist/scripts/"))
        .pipe(notify({
            title: "JS",
            message: "Concatenated"
        }))
        .pipe(browserSync.stream());
});