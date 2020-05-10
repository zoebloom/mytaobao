let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass");
let htmlmin = require("gulp-htmlmin")

gulp.task("watch-all",async ()=>{
    gulp.watch("./src/*.html",async ()=>{
        gulp.src("./src/*.html")
        .pipe(htmlmin({
            collapseWhitespace:true
        }))
        .pipe(gulp.dest("./dist"))
    })

    gulp.watch("./src/*.scss",async ()=>{
        gulp.src("./src/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"));
     });


})
gulp.task('server', function () {
    connect.server({
        root: './dist',
        livereload: true
    });
});