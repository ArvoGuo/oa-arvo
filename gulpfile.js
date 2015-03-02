var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');
var sass    = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
    script: 'app.js',
    ignore: ["gulpfile.js"]
  }).on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
      reload({ stream: false });
    }, 1000);
  });
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["public/**/*.*", "views/**/*.*","!public/stylesheets/sass/*.*"],
    port: 7000
  });
});

gulp.task('sass',function() {
  return sass("public/stylesheets/sass", { sourcemap: true })
    .pipe(sourcemaps.write('./', {
        includeContent: false,
        sourceRoot: "public/stylesheets/sass"
    }))
    .pipe(gulp.dest('public/stylesheets/css'));
});
gulp.task('default', ['browser-sync'], function() {
  gulp.watch("public/stylesheets/sass/*.sass",['sass'])
});



