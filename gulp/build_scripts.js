'use strict';

/**===========================================================================**
    Require
**===========================================================================**/
//Gulp
var gulp = require('gulp');
//path builder
var path = require('path');
//configuration file
var conf = require('./conf');
//browserSync
var browserSync = require('browser-sync');

//gulp plugins
var $ = require('gulp-load-plugins')();

/**===========================================================================**
    Task
**===========================================================================**/
//On script re-load, run the check again
gulp.task('scripts-reload', function() {
    return buildScripts()
        .pipe(browserSync.stream());
});
//Build scripts
gulp.task('scripts', function() {
    return buildScripts();
});
//Build every script in the app
function buildScripts() {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.size())
};
