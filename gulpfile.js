var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');

gulp.task('default', function () {
    // set up the browserify instance on a task basis
    return browserify({
        entries: './src/main.js',
        debug: true,
        // defining transforms here will avoid crashing your stream
        transform: [babelify.configure({
            // comments: false
            presets : ["env", "babel-preset-react"]
        })]
    })
    .bundle()
    .on('error', function (error) {
        gutil.log(error);
        this.emit("end"); // Read here: http://latviancoder.com/story/error-handling-browserify-gulp
    })
    .pipe(source('app.js'))

    // Add transformation tasks to the pipeline here.
    // .pipe(uglify())

    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {

    gulp.watch('./src/**/*.js*', ['default']);

})