var gulp          = require('gulp');
var runSequence   = require('run-sequence');

gulp.task('default', function() {
  runSequence(
      'build',
      [
        'html:watch',
        'scss:watch',
        'img:watch',
        'js:watch',
        'json:watch',
        'fonts:watch',
        'libs:watch'
      ],
      'server'
  );
});