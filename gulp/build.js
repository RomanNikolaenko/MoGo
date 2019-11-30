var gulp          = require('gulp');
var runSequence   = require('run-sequence');
var del           = require('del');

gulp.task('clean', function() {
  return del(['dist/'])
})
gulp.task('build', ['clean'], function() {
  runSequence(
      'html',
      'scss',
      'img',
      'js',
      'json',
      'fonts',
      'libs'
  );
});