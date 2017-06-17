// Get Gulp
var gulp = require('gulp')

var about = require('gulp-about')
var del = require('del')
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
gulp.task('about', function() {
    gulp.src('package.json')
        .pipe(about({
            keys: ['name', 'version', 'author'],
            inject: {
                buildDate: Date.now()
            }
        }))
        .pipe(gulp.dest(bases.dist))
})

//clean plugin
gulp.task('clean', function() {
    del.sync[bases.dist]
})

//copy html
gulp.task('copy-html', function() {
    gulp.src(sources.html, { cwd: bases.src })
        .pipe(gulp.dest(bases.dist))
})

gulp.task('default', ['clean', 'about', 'copy-html'], function() {
    console.log('Gulp Running...');
})