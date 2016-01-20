'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var util = require('gulp-util');
var assign = require('lodash.assign');
var sourcemaps = require('gulp-sourcemaps');
var babel = require("gulp-babel");
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
// var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');
var xo = require('gulp-xo');

var postcss = require('gulp-postcss');
var atImport = require('postcss-import');
var cssnext = require('postcss-cssnext');
var nested = require('postcss-nested');
var cssnano = require('cssnano');

var vulcanize = require('gulp-vulcanize');

var size = require('gulp-size');


gulp.task('xo', function () {
  return gulp.src('src/js/index.js')
  .pipe(xo())
  .pipe(gulp.dest('src/js'));
});

var customOpts = {
  entries: ['src/js/index.js'],
  debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

gulp.task('js', ['xo'], bundle);
b.on('update', bundle);
b.on('log', util.log);

function bundle() {
  return b.bundle()
  .on('error', util.log.bind(util, 'Browserify Error'))
  .pipe(source('all.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(babel({
    presets: ['es2015']
  }))
  // .pipe(concat('all.js'))
  // .pipe(uglify({preserveComments: 'some'}))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('dist/js'))
  .pipe(size({title: 'js'}));
}

gulp.task('js-watch', ['js'], browserSync.reload);


gulp.task('css', function () {
  return gulp.src('src/css/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([
    atImport({path: ['src/css/style.css']}),
    cssnext,
    nested,
    cssnano
  ]))
  .pipe(sourcemaps.write('.'))
  .pipe(size({title: 'css'}))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('css-watch', ['css'], browserSync.reload);


gulp.task('vulcanize', function () {
  return gulp.src('src/elements/all-imports.html')
  .pipe(vulcanize({
    inlineScripts: true,
    inlineCss: true,
    stripComments: true
  }))
  .pipe(size({title: 'vulcanize'}))
  .pipe(gulp.dest('dist/elements'));
});

gulp.task('vulcanize-watch', ['vulcanize'], browserSync.reload);


gulp.task('default', ['js', 'css', 'vulcanize'], function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js', ['js-watch']);
  gulp.watch('src/css/*.css', ['css-watch']);
  gulp.watch('src/elements/*.html', ['vulcanize-watch']);
});
