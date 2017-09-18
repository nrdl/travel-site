var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('hurray!');
});

gulp.task('html', function() {
    console.log('html task');
});

gulp.task('styles', function() {
    console.log('Sass or scss');
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });
    
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});