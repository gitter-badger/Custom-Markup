
'use strict';

var gulp = require('gulp');
var pkg = require('./package.json');
var minifyCSS = require('gulp-minify-css');
var comment = '\/*\r\n* Wing ' + pkg.version + '\r\n* Copyright 2017, Kabir Shah\r\n* http:\/\/usewing.ml\/\r\n* Free to use under the MIT license.\r\n* https:\/\/kingpixil.github.io\/license\r\n*\/\r\n';
var $ = require('gulp-load-plugins')();

gulp.task('build', function () {
  return gulp.src(['dist/cm.css'])
    .pipe($.concat('cm.min.css'))
    .pipe($.header(comment + '\n'))
    .pipe($.size())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', ['build'], function() {
  return gulp.src(['./dist/cm.min.css'])
    .pipe(minifyCSS())
    .pipe($.header(comment))
    .pipe($.size())
    .pipe($.concat('cm.min.css'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('watch', function() {
  gulp.watch(['src/*.css'], ['default']);
});


gulp.task('default', ['build', 'minify']);
