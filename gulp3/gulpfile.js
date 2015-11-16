'use strict';
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	cssmin = require('gulp-cssmin');
gulp.task('uglify',function(){
	gulp.src('src/jquery-1.7.2.js')
	.pipe(uglify())
	.pipe(gulp.dest('dest'))
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(gulp.dest('dest'));
});
gulp.task('concat',function(){
	return gulp.src('src/*.css')
	.pipe(concat('all.css'))
	.pipe(gulp.dest('dest'));
});
gulp.task('cssmin',['concat'],function(){
	gulp.src('dest/all.css')
	.pipe(cssmin())
	.pipe(gulp.dest('dest'))
	.pipe(rename({
		suffix:'.min'
	}))
	.pipe(gulp.dest('dest'));
});
gulp.task('default',['uglify','concat','cssmin']);