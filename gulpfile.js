"use strict";

var 
	gulp = require('gulp'),
	wiredep = require('wiredep').stream,
	runSequence = require('run-sequence'),
	port = 8888;

// Load plugins
var $ = require('gulp-load-plugins')();

gulp.task('connect', function(){
	$.connect.server({
		root: 'app',
		port: port,
		livereload: true
	})
});


// HTML, CSS AND JS
gulp.task('html', function() {
	var assets = $.useref.assets();
	
	gulp.src('app/*.html')
		.pipe(assets)
		.pipe($.if('*.js', $.uglify()))
		.pipe($.if('*.css', $.minifyCss()))
		.pipe(assets.restore())
		.pipe($.useref())
		.pipe(gulp.dest('dist/'));
});

// Images
gulp.task('images', function () {
	gulp.src(['app/images/**/*'])
		// .pipe($.cache($.imagemin({
		//  optimizationLevel: 3,
		//  progressive: true,
		//  interlaced: true
		// })))
		.pipe(gulp.dest('dist/images/'))
		.pipe($.size());
});

// copy project
gulp.task('sftp', function () {
	gulp.src('dist/**/*')
		.pipe($.sftp({
			host: 'zurbazar.com',
			user: 'root',
			pass: 'fgjrfkbgcbc',
			remotePath: '/home/oui/www/uk-europoselok.ru/'
		}));
});

// clean
gulp.task('clean', function(){
	gulp.src('dist', {read: false})
		.pipe($.clean());
})

// build
// gulp.task('build', ['html', 'images', 'sftp']);
gulp.task('build', function() {
  	runSequence(
    	'html',
    	'images',
    	'sftp'
  	);
});

// Open
gulp.task('serve', ['connect'], function() {
  	$.open("http://localhost:" + port);
});


// bower
gulp.task('bower', function(){
	gulp.src('app/*.html')
		.pipe(wiredep({
			directory: "app/bower_components"
		}))
		.pipe(gulp.dest('./app'));
})


gulp.task('watch', function(){
	gulp.watch('bower.json', ['bower']);

	gulp.watch([
		'app/*.html',
		'app/css/**/*.css',
		'app/js/**/*.js',
		'app/images/**/*'
	], function (event) {
		return gulp.src(event.path)
			.pipe($.connect.reload());
	});
})

// default task
gulp.task('default', ['bower', 'connect', 'watch']);