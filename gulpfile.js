const gulp = require('gulp');
const gulpConnect = require('gulp-connect');
const gulpMinifyCss = require('gulp-minify-css');
const gulpConcat = require('gulp-concat');
const gulpUglify = require('gulp-uglify');
const gulpHtmlmin = require('gulp-htmlmin');
const clean = require('gulp-clean');
const image = require('gulp-image');
const fileinclude = require('gulp-file-include');


gulp.task('server', async function () {
    gulpConnect.server({
        root: "dist",
        livereload: true
    });
});

gulp.task('minify-css', async function () {
    gulp.src('./src/css/*.css')
        .pipe(gulpMinifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulpConnect.reload());
});

gulp.task('minify-js', async function () {
    gulp
        .src([
            './src/js/*.js'
        ])
        // .pipe(gulpConcat('bundle.js'))
        // .pipe(gulpUglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(gulpConnect.reload());
});

gulp.task('minify-html', async function () {
    gulp.src('src/*.html')
        .pipe(gulpHtmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(gulpConnect.reload());
});
gulp.task('image', async function () {
    gulp.src('./src/images/*')
    .pipe(image())
    .pipe(gulp.dest('dist/image'))
})

gulp.task('watch', async function () {
    gulp.watch('./src/js/*.js', gulp.series('minify-js'));
    gulp.watch('./src/css/*.css', gulp.series('minify-css'));
    gulp.watch('./src/*.html', gulp.series('minify-html'));
});
gulp.task('files', function() {
    gulp.src(['src/index.html', 'src/rooms.html', 'src/facilities.html', 'src/contact-us.html', 'src/faq.html'])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./dist'))
})


gulp.task('clean', function() {
  return gulp.src('dist', {
    read: false,
    allowEmpty: true
  }).pipe(clean());
});

gulp.task('build', gulp.series('clean', 'minify-css', 'minify-js', 'minify-html', 'image', 'files'));

gulp.task('default', gulp.series('watch', 'server'));