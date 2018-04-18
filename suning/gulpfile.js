var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
var uglify = require("gulp-uglify");

gulp.task("sass",function(){//scss文件转化为css文件，并压缩
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCss())
	.pipe(rename({
		suffix:".min"
	}))
	.pipe(gulp.dest("dist/css"));
});

gulp.task("copy-html",function(){//拷贝html文件
	gulp.src("html/*.html")
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload());
});

gulp.task("images",function(){//拷贝图片
 	return gulp.src("img/**")
 	.pipe(gulp.dest("dist/img"))
}) 

gulp.task("scripts",function(){ //拷贝js
	return gulp.src("js/*.js") 
	.pipe(gulp.dest('dist/js')); 
}) 


gulp.task("server",function(){//搭建服务
	connect.server({
		root:"dist",
		livereload:true
	})
});

gulp.task("watch",function(){//实时监听
	gulp.watch("html/*.html",["copy-html"]);
	gulp.watch("sass/*.scss",["sass"]);
	gulp.watch("js/*.js",["scripts"]);
	gulp.watch("img/**",["images"]);
})

gulp.task("default",["server","watch"]);
