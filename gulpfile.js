const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require('css-declaration-sorter');

gulp.task('default', () => {
 return gulp.src('./sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(postcss([cssdeclsort({order: 'smacss'})]))
  .pipe(postcss([autoprefixer({ browsers: ['last 3 versions'] }) ]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dest'));
});

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', ['default']);
});
