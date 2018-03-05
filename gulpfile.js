var gulp=require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');
    runSequence = require('run-sequence');
    argv = require('yargs').argv

gulp.task('server',function(){
    connect.server({
        port: 8888,
        root:'./',
        livereaload:true
    });
});

gulp.task('sass',function(){
var outputStyle = argv.prod ? 'compressed':'';

    return gulp.src('./scss/main.scss')
    .pipe(sass({
        outputStyle: outputStyle
    }).on('error',sass.logError))
    .pipe(gulp.dest('./dist/style'))
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