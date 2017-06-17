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
About Plugin that retrieves information form package.json
```sh
npm install --save-dev gulp-about
```
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
### gulp-clean
Helps to remove files / folders
```sh
npm install --save-dev gulp-clean
```
```javascript
var gulp = require('gulp');
var clean = require('gulp-clean');
 
gulp.task('clean-scripts', function () {
  return gulp.src('app/tmp/*.js', {read: false})
    .pipe(clean());
});
 
gulp.task('scripts', ['clean-scripts'], function () {
  gulp.src('app/scripts/*.js')
    .pipe(gulp.dest('app/tmp'));
});
 
gulp.task('default', ['scripts']);
```
### gulp-util
Utility functions for gulp plugins
```sh
npm install --save-dev gulp-util
```
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