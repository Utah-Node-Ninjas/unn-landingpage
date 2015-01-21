/* jshint node: true */
'use strict';

var gulp = require('gulp'),
  connect = require('gulp-connect')

gulp.task('default', function() {
  connect.server();
});