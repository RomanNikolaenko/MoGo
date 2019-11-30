var gulp          = require('gulp');
var cnf = require('../package.json').config;

gulp.task('json', function () {
    return gulp.src(cnf.src.json)
        .pipe(gulp.dest(cnf.dist.json));
});
   
gulp.task('json:watch', function () {
    gulp.watch(cnf.dist.json, ['json']);
});