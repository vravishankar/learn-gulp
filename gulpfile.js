// Get Gulp
var gulp = require('gulp')
var about = require('gulp-about')

//about plugin
gulp.task('about', function() {
    return gulp.src('package.json')
        .pipe(about({
            keys: ['name', 'version', 'author'],
            inject: {
                buildDate: Date.now()
            }
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('default', function() {
    console.log('Welcome to Gulp');
})