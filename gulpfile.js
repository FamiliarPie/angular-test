var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    browserify_css = require('browserify-css'),
    clean = require('gulp-clean'),
    express = require('express'),
    livereload = require('connect-livereload'),
    lrserver = require('tiny-lr')();

gulp.task('build', ['copy', 'browserify']);

gulp.task('browserify', function() {
    gulp.src('src/app/app.js')
        .pipe(browserify({}))
        .pipe(concat('app-scripts.js'))
        .pipe(gulp.dest('build/dist/js'));
});

gulp.task('copy', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('./build/dist'));

    gulp.src('node_modules/angular-ui-bootstrap/template/**/*')
        .pipe(gulp.dest('./build/dist/uib/template'))

    gulp.src('src/api/*')
        .pipe(gulp.dest('./build/dist/api'));

    gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./build/dist/fonts'))

    gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/font-awesome/css/font-awesome.css',
            'src/css/site.css'
        ])
        .pipe(concat('site.css'))
        .pipe(gulp.dest('./build/dist/css'));
});

gulp.task('clean', function() {
    gulp.src('build')
        .pipe(clean());
})

gulp.task('watch', function() {
    gulp.watch(['src/**/*'], ['build'])
})

// Server config

var server_port = 5000,
    livereload_port = 35729,
    server = express();

server.use(livereload({port: livereload_port}));
server.use(express.static('./build/dist'));

gulp.task('serve', function() {
    server.listen(server_port);
    lrserver.listen(livereload_port);
});


gulp.task('dev', ['build', 'serve', 'watch']);