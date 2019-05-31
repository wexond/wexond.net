const gulp = require("gulp");
const sass = require("gulp-sass");
const terser = require("gulp-terser");
const cleanCSS = require("gulp-clean-css");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const imagemin = require("gulp-imagemin");

const paths = {
  styles: {
    src: "src/styles/**/*.scss",
    dest: "dist/styles/"
  },
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/js/"
  },
  images: {
    src: "src/img/**.*",
    dest: "dist/img/"
  },
  ico: {
    src: "src/**.ico",
    dest: "dist/"
  },
  html: {
    src: "src/**.html",
    dest: "dist/"
  }
};

function clean() {
  return del(["dist"]);
}

function ico() {
  return gulp.src(paths.ico.src).pipe(gulp.dest(paths.ico.dest));
}

function html() {
  return gulp
    .src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.html.dest));
}

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function images() {
  return gulp
    .src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(terser())
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.ico.src, ico);
}

var build = gulp.series(
  clean,
  gulp.parallel(styles, scripts, html, images, ico)
);

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.watch = watch;
exports.images = images;
exports.ico = ico;
exports.build = build;

exports.default = build;
