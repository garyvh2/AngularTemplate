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
//Lodash
var _ = require('lodash');
//Wiredep (inject dependencies, scripts and styles)
var wiredep = require('wiredep').stream;

//gulp plugins
var $ = require('gulp-load-plugins')();

/**===========================================================================**
    Task
**===========================================================================**/
//Re-Inject files
gulp.task('inject-reload', ['inject'], function() {
    browserSync.reload();
});

gulp.task('inject', ['scripts', 'styles'], function() {
    //Inject the styles
    var injectStyles = gulp.src([
        path.join(conf.paths.tmp, '/app/**/*.css'),
        path.join('!' + conf.paths.tmp, '/app/vendor.css')
    ], {
        read: false
    });
    //Inject the scripts
    var injectScripts = gulp.src([
            path.join(conf.paths.src, '/app/**/*.module.js'),
            path.join(conf.paths.src, '/app/**/*.js'),
            path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
            path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
        ])
        .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));

    var injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/')],
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/*.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/')));
});
