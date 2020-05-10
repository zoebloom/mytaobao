let gulp = require("gulp");
let connect = require("gulp-connect");

gulp.task("watch-all",async ()=>{
    gulp.watch("./src/**/*",async ()=>{
        gulp.src("./src/**/*")
        .pipe(gulp.dest("./dist"));
    })


})
gulp.task('server', function () {
    connect.server({
        root: './dist',
        livereload: true
    });
});