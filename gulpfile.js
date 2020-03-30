const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

function minify() {
  return gulp
    .src('./*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest('dist'));
}

function style() {
  return gulp
    .src('scss/style.scss')
    .pipe(rename({ suffix: '.min' }))
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
      })
    )
    .on('error', console.error.bind(console))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function js() {
  return gulp
    .src('js/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('scss/**/*.scss', style);
  gulp.watch('./*.html', style).on('change', browserSync.reload);
  gulp.watch('./*.js', style).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

gulp.task('default', gulp.parallel(style, watch));
