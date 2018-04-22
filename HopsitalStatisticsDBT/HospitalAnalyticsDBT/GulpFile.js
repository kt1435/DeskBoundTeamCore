var gulp = require("gulp");
var clean = require("gulp-clean");
var concat = require("gulp-concat");
var jshint = require("gulp-jshint");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("all", function () {
    gulp.src("wwwroot/lib/*").pipe(clean());
    gulp.src(["TypeScript/*.js", "TypeScript/**/*.js", "TypeScript/**/**/*.js", "TypeScript/**/**/**/*.js"])
        .pipe(concat("combined.js"))
        .pipe(jshint())
        .pipe(uglify())
        .pipe(rename({
            extname: ".min.js"
        }))
        .pipe(gulp.dest("wwwroot/lib"));
}); 
gulp.task("watcher", function () {
    gulp.watch("TypeScript/*.ts", ["all"]);
});