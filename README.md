# Using Gulp
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
### gulp-sass
Plugin to convert sass files to css
```sh
npm install --save-dev gulp-sass
```
```javascript
var gulp = require("gulp")
var sass = require("gulp-sass")

gulp.task('sass',function() {
    gulp.src('src/sass/**/*.scss')
    .pipe(sass)
    .pipe(gulp.dest('dist/css'))
})
```
### gulp-babel
To convert javascript code from ES6 to ES5
```sh
npm install --save-dev gulp-babel
npm install --save-dev npm install babel-preset-env --save-dev
```
```sh
touch .babelrc
```
_.babelrc_
```json
{
    "presets" : ["env"]
}
```
```javascript
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
```
Using sourcemaps
```javascript
var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
```