var gulp = require('gulp');
var beml = require('gulp-beml');

gulp.task('default', function() {
  gulp.src('./src/index.html')
      .pipe(beml())
      .pipe(gulp.dest('./build'));
});
