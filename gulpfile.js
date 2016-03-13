var gulp         = require('gulp');
var cleanCSS     = require('gulp-clean-css');
var rename       = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  gulp.src('./style.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./'));
});
