var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('publish',function () {
	gulp.src('./build/**/*')
   .pipe(gulp.dest('../ariesy.github.io'));
})