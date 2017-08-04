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
//browserSyncSpa
var browserSyncSpa = require('browser-sync-spa');
//Util
var util = require('util');
/**===========================================================================**
    Browse Sync Functions
**===========================================================================**/
function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if (baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
        routes = {
            '/bower_components': 'bower_components'
        };
    }

    var server = {
        baseDir: baseDir,
        routes: routes
    };

    browserSync.instance = browserSync.init({
        startPath: '/',
        server: server,
        browser: browser
    });
}

browserSync.use(browserSyncSpa({
    selector: '[ng-app]' // Only needed for angular apps
}));

/**===========================================================================**
    Task
**===========================================================================**/
gulp.task('serve', ['watch'], function() {
    browserSyncInit([path.join(conf.paths.tmp, '/'), conf.paths.src]);
});
