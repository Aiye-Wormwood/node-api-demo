//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    livereload = require('gulp-livereload');

//定义一个testLess任务（自定义任务名称）
gulp.task('less', function () {
    gulp.src('src/less/index.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('dist/css')) //将会在src/css下生成index.css
        .pipe(livereload());
});

gulp.task('concat', function () {
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('dist/js'));
});

gulp.task('jsmin', function () {
    gulp.src(['dist/js/all.js'])
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/min'))
    	.pipe(livereload());
});

//特别注意：若编译less的时候，同时执行其他操作，有可能引起页面刷新，而不是将样式植入页面
//例如下面任务同时生成sourcemap：
//var sourcemaps = require('gulp-sourcemaps');
//gulp.task('less', function () {
//    gulp.src(['src/less/*.less'])
//        .pipe(sourcemaps.init())
//        .pipe(less())
//        .pipe(sourcemaps.write('./'))
//        .pipe(gulp.dest('src/css'))
//        .pipe(livereload());
//});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('src/js/**/*.js', ['concat','jsmin']);
});

gulp.task('default',['less','concat','jsmin','watch']); //定义默认任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径