#Using Gulp
## Install Gulp
```sh
npm install -g gulp-cli
npm init -y
npm install --save-dev gulp
```
## Basic Gulp Setup
__**gulpfile.js**__
```javascript
var gulp = require("gulp")

gulp.task('default',function() {
    console.log('Hello Gulp')
})
```
## Gulp Plugins
### gulp-about
```javascript
var gulp = require('gulp')
var about = require('gulp-about')
gulp.task('about',function() {
    return gulp.src('package.json')
                .pipe(about())
                .pipe(gulp.dest('dist'))
})

//Extended version of gulp-about
gulp.task('about', function () {
    return gulp.src('package.json')
        .pipe(about({
            keys: ['name', 'version', 'author'],   // properties to pick from the source 
            inject: {                              // custom properties to inject 
                buildDate: Date.now()
            }
        }))
        .pipe(gulp.dest('dist'));
});
```
### gulp-util
Utility functions for gulp plugins
```javascript
var gulp = require('gulp')
var gutil = require('gulp-util')
// gulp should be called like this : 
// $ gulp --type production 
gulp.task('scripts', function() {
  gulp.src('src/**/*.js')
    .pipe(concat('script.js'))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(gulp.dest('dist/'));
});
```