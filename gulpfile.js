var gulp   = require("gulp")
var concat = require("gulp-concat")  // bundler
var uglify = require("gulp-uglify")  // minify
var typescript = require('gulp-typescript') // gulp typescript plugin 
var tsconfig = require('./tsconfig.json') 

// TypeScript
gulp.task('ts', function() {
    // Compile logics
    var files = [ 
      './ts/typings/**/*.ts',
      './ts/logic/**/*.ts'
    ]
    return gulp.src(files)
        .pipe(typescript(tsconfig.compilerOptions)).js
        .pipe(concat("logic.js"))
        .pipe(gulp.dest('./ts/temp/')) 
})

// Build
gulp.task("default", ["ts"], function() {  
    // Concat
    gulp.src(["./ts/temp/*.js"])
        .pipe(concat("application.js"))
        .pipe(uglify({compress: true, preserveComments: 'function', mangle: true })) // riotタグのコードが入ると失敗する。EC2015でないから？という指摘あり。riotのオプション見直しが必要
        .pipe(gulp.dest('./docs/assets/js/')) 

})
