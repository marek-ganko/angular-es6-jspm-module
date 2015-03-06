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

gulp.task('version', 'Prints the bower package version.', [], function() {
  process.stdout.write('\n' + bowerPackage.name + ' v' + bowerPackage.version + '\n\n');
}, {
  aliases: ['v', 'V']
});
