const gulp = require('gulp');
const sass = require('sass');
const gulpSass = require('gulp-sass');
const minify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');


const scss = gulpSass(sass);


const BUILD_JS_FOLDER = './dist/js';
const BUILD_CSS_FOLDER = './dist/styles';
const BUILD_IMG_FOLDER = './dist/images';
const SRC_FOLDER = './src/js/*.js';
const SRC_SCSS_FOLDER = './src/scss/*.scss';
const SRC_IMG_FOLDER = './src/images/*.jpg';

function watcher() {
    return gulp.watch(SRC_FOLDER, jsBuild);
}

function jsBuild() {
    return gulp.src(SRC_FOLDER)
        .pipe(minify())
        .pipe(concat('build.js'))
        .pipe(gulp.dest(BUILD_JS_FOLDER));
}

function scssTask() {
    return gulp.src(SRC_SCSS_FOLDER)
        .pipe(scss())
        .pipe(gulp.dest(BUILD_CSS_FOLDER));
}

function moveImages() {
    return gulp.src(SRC_IMG_FOLDER)
        .pipe(gulp.dest(BUILD_IMG_FOLDER));
}


gulp.task('default', gulp.series(jsBuild, moveImages, scssTask, watcher))
