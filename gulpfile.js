var gulp = require('gulp'),
  gulpins = require('gulp-load-plugins')(),
  bowerPackage = require('./bower.json'),
  sources = {
    less: 'src/**/*.less'
  };

/**
 * Init gulp help
 */
gulpins.help(gulp);

/**
 * Less to css
 */
gulp.task('less', function () {
  return gulp.src(sources.less)
    .pipe(gulpins.plumber())
    .pipe(gulpins.less({compress: true}))
    .pipe(gulp.dest('src/'));
});

gulp.task('version', 'Prints the bower package version.', [], function() {
  process.stdout.write('\n' + bowerPackage.name + ' v' + bowerPackage.version + '\n\n');
}, {
  aliases: ['v', 'V']
});

/**
 * Default task
 */
gulp.task('default', ['less'], function () {
  gulp.watch(sources.less, ['less']);
});