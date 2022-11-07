// Modules & Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browsersync = require('browser-sync');
const imagemin = require ('gulp-imagemin');
const {src, dest} = require("gulp"); // Added
// Styles Task
gulp.task('styles', function () {
    return gulp.src('app/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist'));
});
// Scripts Task

gulp.task('images', function () {
    return gulp.src ( "app/img/*.+(jpg|jpeg|png|gif)")
        .pipe (imagemin ({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        .pipe (dest ("dist/images"))
});

gulp.task('scripts', function () {
    return gulp.src('app/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
// BrowserSync Task
gulp.task('browsersync', function() {
    return browsersync({
        server: {
            baseDir: './'
        }
    });
});
// Watch Task
gulp.task('watch', function() {
    gulp.watch('app/css/*.css', gulp.series('styles', browsersync.reload));
    gulp.watch('app/js/*.js', gulp.series('scripts', browsersync.reload));
});
// Default Task
gulp.task('default', gulp.parallel('styles', 'scripts', 'images', 'browsersync', 'watch'));