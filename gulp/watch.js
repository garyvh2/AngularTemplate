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
/**===========================================================================**
    Functions
**===========================================================================**/
function isOnlyChange(event) {
    return event.type === 'changed';
}
/**===========================================================================**
    Task
**===========================================================================**/
gulp.task('watch', ['inject'], function() {

    gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

    gulp.watch([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join(conf.paths.src, '/app/**/*.scss')
    ], function(event) {
        if (isOnlyChange(event)) {
            gulp.start('styles-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
        if (isOnlyChange(event)) {
            gulp.start('scripts-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
        browserSync.reload(event.path);
    });
});
