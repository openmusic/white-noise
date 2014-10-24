var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build', ['build-js', 'build-html']);

gulp.task('build-js', function() {
	return gulp.src('./demo/main.js')
		.pipe(browserify({
			//insertGlobals: false
		}))
		.pipe(uglify())
		.pipe(rename('bundle.js'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('build-html', function() {
	return gulp.src('demo/index.html')
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
	gulp.watch(['demo/**/*', 'Oscillator.js'], ['build']);
});


gulp.task('default', ['build', 'watch']);
