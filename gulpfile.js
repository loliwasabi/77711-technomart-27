var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uncss = require('gulp-uncss');
var csscomb = require('gulp-csscomb');
var gulpStylelint = require('gulp-stylelint');
var rename = require("gulp-rename");
var jsmin = require('gulp-jsmin');

gulp.task('default', function () {
  return null;
  // return gulp
  //   .src('css/*.css')
  //   // ======= минифицирование =======
  //   .pipe(cleanCSS({compatibility: 'ie8'}))
  //   // ===============================
  //
  //   .pipe(gulp.dest('css/'))
});

gulp.task('css-lint', function(done){
  cssLint();
  done();
});

gulp.task('css-clean', function (done) {
  cssClean();
  done();
});

gulp.task('css-min', function (done) {
  cssMin();
  done();
});

gulp.task('min', function (done) {
  cssMin();
  jsMin();
  done();
});

gulp.task('js-min', function (done) {
  jsMin();
  done();
});



function cssLint(){
  return gulp
    .src('css/*.css')

    // ======= упорядочевание селекторов =======
    .pipe(csscomb())
    // ===============================

    // ======= Форматирование css по правилам stylint =======
    .pipe(gulpStylelint({
      failAfterError: true,
      reportOutputDir: 'reports/lint',
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'json', save: 'report.json'},
      ],
      debug: true,
      fix: true
    }))
    // ===============================

    // ======= Добавляем к имени файла '-linted' =======
    // .pipe(rename(function (path) {
    //   // Updates the object in-place
    //   path.basename += "-linted";
    // }))
    // ===============================

    .pipe(gulp.dest('css'));
}

function cssClean(){
  return gulp
    .src('css/*.css')
    // ======= удаление несипользуемых селекторов =======
    .pipe(uncss({
      html: ['index.html', 'catalog.html']
    }))
    // ===============================

    // ======= Добавляем к имени файла '-cleared' =======
    .pipe(rename(function (path) {
      // Updates the object in-place
      path.basename += "-cleared";
    }))
    // ===============================
    .pipe(gulp.dest('css'));
}

function cssMin(){
  return gulp
    .src('css/*.css')
    // ======= минифицирование =======
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // ===============================

    // ======= Добавляем к имени файла '-cleared' =======
    .pipe(rename(function (path) {
      // Updates the object in-place
      path.basename += "-min";
    }))
    // ===============================

    .pipe(gulp.dest('css/'))
}

function jsMin() {
  return gulp.src('js/*.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '-min'}))
    .pipe(gulp.dest('js'));
}

