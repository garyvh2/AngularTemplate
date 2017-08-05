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
//On style re-load, run the check again
gulp.task('styles-reload', ['styles'], function() {
    return buildStyles()
        .pipe(browserSync.stream());
});
//Build styles
gulp.task('styles', function() {
    return buildStyles();
});
//Build every style in the app
var buildStyles = function() {
    //sass options
    var sassOptions = {
        style: 'expanded'
    };
    //Files to be injected
    var injectFiles = gulp.src([
        path.join(conf.paths.src, '/app/**/*.scss'),
        path.join('!' + conf.paths.src, '/app/app.scss')
    ], {
        read: false
    });
    //Configure the inject
    var injectOptions = {
        transform: function(filePath) {
            filePath = filePath.replace(conf.paths.src + '/app/', '');
            return '@import "' + filePath + '";';
        },
        starttag: '// injector',
        endtag: '// endinjector',
        addRootSlash: false
    };


    return gulp.src([
            path.join(conf.paths.src, '/app/app.scss')
        ])
        .pipe($.inject(injectFiles, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe($.sourcemaps.init())
        .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
        .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/app/')));
};
