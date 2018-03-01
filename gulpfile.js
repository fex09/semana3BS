var gulp=require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');
    runSequence = require('run-sequence');

gulp.task('server',function(){
    connect.server({
        port: 8888,
        root:'./',
        livereaload:true
    });
});

gulp.task('sass',function(){
    return gulp.src('./scss/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error',sass.logError))
    .pipe(gulp.dest('./style'))
    .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch('./scss/**/*.scss',['sass']);
});

gulp.task('default',function(){
    runSequence(
        'sass',
        'server',
        'watch'
    );
});