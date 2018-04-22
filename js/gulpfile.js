var gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
// var webpack = require('webpack');

gulp.task('es6', () => {

	gulp.src('./src/core/**/*.js')
		.pipe(babel({
			// plugins: ["transform-es2015-modules-systemjs"],
			presets: ['es2015'],
		}))
    .pipe(concat('Valid88.js'))
		.pipe(gulp.dest('./build/core'));

});
