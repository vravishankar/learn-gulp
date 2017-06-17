// Get Gulp
var gulp = require('gulp')
var about = require('gulp-about')
var clean = require('gulp-clean')
var util = require('gulp-util')

//about plugin
gulp.task('about', ['clean'], function() {
    return gulp.src('package.json')
        .pipe(about({
            keys: ['name', 'version', 'author'],
            inject: {
                buildDate: Date.now()
            }
        }))
        .pipe(gulp.dest('dist'))
})

//clean plugin
gulp.task('clean', function() {
    util.log('Inside clean plugin...')
    return gulp.src('dist/**', { read: false })
        .pipe(clean())
})

gulp.task('default', function() {
    console.log('Welcome to Gulp');
})