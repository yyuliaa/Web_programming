// Modules & Plugins


const log = true;

// Вибір препроцесора для css - sass, less або scss

const use_preprocessor = "sass";
const css_preprocessor = (use_preprocessor == "less" ? "less" : "sass");

// Підключаємо gulp-clean-css - модуль стисненя css

const clean_css = require("gulp-clean-css");

// Підключаємо css препроцесори
const sass = require("gulp-sass")(require("sass"));
const less = require("gulp-less");

// Підключаємо gulp-newer - модуль для фільтрування змінених файлів
const newer = require("gulp-newer");

// Підключаємо gulp-debug - виведення допоміжної інформації
const debug = require("gulp-debug");

// Підключаємо gulpif - перевірка умов у .pipe()
const gulp_if = require("gulp-if");

// Підключаємо browser-sync - локальний сервер для тестування
const browser_sync = require("browser-sync").create();

// Налаштування для модуля gulp-debug
const opt = { title: "log", showCount: false };

// Налаштування для модуля gulp-clean-css

const css_opt = { level: { 1: { specialComments: 0 } } };

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browsersync = require('browser-sync');
const imagemin = require ('gulp-imagemin');
const {src, dest} = require("gulp"); // Added



// Обробляємо css файли

gulp.task('css', function() {

    return gulp.src("app/css/*.css")            // Беремо файли з розширенням css із папки app/css

          .pipe(newer("build/"))          // Відфільтровуємо лише змінені файли

          .pipe(gulp_if(log, debug(opt))) // Відображаємо список оброблюваних файлів

	  .pipe(clean_css(css_opt))       // Стискаємо готові css файли

          .pipe(dest("build/css/"));           // Переміщуємо у папку build/
});



// Обробляємо sass, less або scss файли

gulp.task('preprocessCss', function () {

    return gulp.src('app/sass/*.sass')

          .pipe(newer("build/"))          // Відфільтровуємо лише змінені файли

          .pipe(gulp_if(log, debug(opt)))  // Відображаємо список оброблюваних файлів

	  .pipe(eval(css_preprocessor)())  // Компілюємо формат препросесора у css

          .pipe(clean_css(css_opt))        // Стискаємо готові css файли

          .pipe(dest("build/css/"));        // Переміщуємо у папку build/css/

});


//          .pipe(browser_sync.stream());    // Оновлюємо стилі без перезавантаження сторінки


// Styles Task
//gulp.task('styles', function () {

//return 	gulp.src('build/css/*.css')
//        .pipe(concat('all.css'))
//        .pipe(gulp.dest('dist'));
//});

gulp.task('styles', function () {

return 	gulp.src('build/css/*.css')
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

// 'preprocessCss', 
gulp.task('watch', function() {
    gulp.watch('app/css/*.css', gulp.series('css', 'preprocessCss', 'styles', browsersync.reload));
    gulp.watch('app/js/*.js', gulp.series('scripts', browsersync.reload));
});
// Default Task
gulp.task('default', gulp.series('css', 'preprocessCss', 'styles', 'scripts', 'images', 'browsersync', 'watch'));
