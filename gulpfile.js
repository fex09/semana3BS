var gulp=require('gulp'),
    connect = require('gulp-connect');

gulp.task('server',function(){
    connect.server({
        port: 8888,
        root:'./'
    });
});

gulp.task('my-task',function(){
    console.log('my task!');
});