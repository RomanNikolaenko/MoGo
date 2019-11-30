var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
    });

    gulp.watch("src/js/*.js", ['js']).on('change', browserSync.reload);
    gulp.watch("src/json/*.json", ['json']).on('change', browserSync.reload);
    gulp.watch("src/scss/*.scss", ['scss'] ).on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});