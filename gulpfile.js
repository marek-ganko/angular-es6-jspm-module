var gulp = require('gulp'),
  gulpins = require('gulp-load-plugins')(),
  bowerPackage = require('./bower.json'),
  sources = {
    srcPath: 'src/**/*',
    less: 'src/**/*.less'
  },
  config = {
    url: 'http://localhost',
    port: 9000,
    browser: 'chrome'
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

/**
 * Prints module version
 */
gulp.task('version', 'Prints the bower package version.', [], function() {
  process.stdout.write('\n' + bowerPackage.name + ' v' + bowerPackage.version + '\n\n');
}, {
  aliases: ['v', 'V']
});


gulp.task('serve', 'serves files by the server', ['less'], function () {
  gulpins.connect.server({
    root: './',
    port: config.port,
    livereload: true
  });

  gulp.src('index.html')
    .pipe(gulpins.open('', {
      url: config.url + ':' + config.port + '/index.html',
      app: config.browser
    }));
});

gulp.task('default', 'starts the application', ['less', 'serve'], function () {
  gulp.watch(sources.less, ['less']);

  gulpins.watch(sources.srcPath).pipe(gulpins.connect.reload());
});