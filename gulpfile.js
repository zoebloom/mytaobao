let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass");

gulp.task("watch-all",async ()=>{
    gulp.watch("./src/**/*",async ()=>{
        gulp.src("./src/**/*")
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