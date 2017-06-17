// Get Gulp
var gulp = require('gulp')
var about = require('gulp-about')
var clean = require('gulp-clean')
var util = require('gulp-util')

var bases = {
    src: 'src/',
    dist: 'dist/'
}

var sources = {
    html: ['*.html'],
    sass: ['sass/**/*.scss']
}

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
    return gulp.src('/dist/**', { read: false })
        .pipe(clean())
})

//copy html
gulp.task('copy-html', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('default', ['clean', 'about', 'copy-html'], function() {
    console.log('Gulp Running...');
})