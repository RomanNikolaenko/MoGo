var gulp = require('gulp');
var cnf = require('../package.json').config;
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");
var sourcemaps = require('gulp-sourcemaps');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");

gulp.task('scss', function () {
  return gulp.src(cnf.src.scss)
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(sourcemaps.init())
  .pipe(scss().on('error', scss.logError))
	.pipe(autoprefixer({
      browsers: ['last 4 versions', 'ie 9'],
      cascade: false
  }))
	.pipe(cssnano())
  .pipe(rename({
  dirname: "",
  basename: "style",
  prefix: "",
  suffix: ".min",
  extname: ".css"
}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(cnf.dist.css));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('./src/scss/**/*.*', ['scss']);
});