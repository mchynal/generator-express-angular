var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function () {
    var watcher = gulp.watch(["client/js/**/*.js"], ['concat']);

    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('concat', function () {
    return gulp.src(["client/js/**/*.js"])
        .pipe(concat("app.js"))
        .pipe(gulp.dest("client/public/javascripts"));
});