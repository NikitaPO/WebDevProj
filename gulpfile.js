const babel = require('gulp-babel'),
      browserSync = require('browser-sync'),
      cleanCSS = require('gulp-clean-css'),
      concat = require('gulp-concat'),
      gulp = require('gulp'),
      pug = require('gulp-pug')
      plumber = require('gulp-plumber'),
      rename = require('gulp-rename'),
      scss = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      uglify = require('gulp-uglify');

gulp.task('scss', function() {
  return gulp.src('app/scss/**/style.scss')
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
    .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
  return gulp.src(['node_modules/slick-carousel/slick/slick.min.js', 'app/js/main.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(babel({
            presets: ['@babel/env']
        }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('app/**/*.html', gulp.parallel('html'));
  gulp.watch('app/js/main.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('scss', 'js', 'html', 'browser-sync', 'watch'));
