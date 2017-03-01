var gulp = require('gulp')
var babel = require('gulp-babel')
var rename = require('gulp-rename')
var insert = require('gulp-insert')
var standard = require('gulp-standard')

gulp.task('default', function () {
  return gulp.src(['./**/*.es6.js', '!./node_modules/**/*'])
    .pipe(babel({
      presets: ['es2015', 'stage-2'],
      plugins: ['remove-comments', 'transform-runtime']
    }))
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('.es6', '')
    }))
    .pipe(insert.prepend('// This is an entirely generated file, please do not modify it directly. Modify the source .es6.js file and run the gulp task'))
    .pipe(gulp.dest('./'))
})

gulp.task('standard', function () {
  return gulp.src(['./**/*.es6.js', '!./node_modules/**/*'])
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: true,
      quiet: true
    }))
})
