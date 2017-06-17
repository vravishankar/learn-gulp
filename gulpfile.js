// Get Gulp
var gulp = require('gulp')

var about = require('gulp-about')
var del = require('del')
var util = require('gulp-util')
var sass = require('gulp-sass')
var babel = require('gulp-babel')

var bases = {
    src: 'src/',
    dist: 'dist/'
}

var sources = {
    html: ['*.html'],
    sass: ['sass/**/*.scss'],
    js: ['js/**/*.js']
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

//sass plugin
gulp.task('sass', function() {
    gulp.src(sources.sass, { cwd: bases.src })
        .pipe(sass())
        .pipe(gulp.dest(bases.dist + 'css/'))
})

//babel plugin
gulp.task('babel', function() {
    gulp.src(sources.js, { cwd: bases.src })
        .pipe(babel())
        .pipe(gulp.dest(bases.dist + 'js'))
})

gulp.task('default', ['clean', 'about', 'copy-html', 'sass', 'babel'], function() {
    console.log('Gulp Running...');
})