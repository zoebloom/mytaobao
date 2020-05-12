let gulp = require("gulp");
let htmlmin =require("gulp-htmlmin");
let ugkify = require("gulp-uglify");
let babel = require("gulp-babel");

gulp.task("default",async ()=>{
    gulp.watch("./src/**/*",async ()=>{
        gulp.src("./src/**/*")
        // .pipe(htmlmin({
        //     collapseWhitespace:true
        // }))
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\nz2001taobao"))
    });

    gulp.watch(["./srcjs/*.js","!./src/jquery-3.2.1.min.js"],async ()=>{
        gulp.src("./src/js/*.js")
        .pipe(babel({
            presets:['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\nz2001taobao\\js"));
    })

    gulp.watch("./src/php/**/*",async ()=>{
        gulp.src("./src/php/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\nz2001taobao\\php"))
    });

})


