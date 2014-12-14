/**
 * Created by jjf001 on 12/14/14.
 */

var gulp = require('gulp');
var mm = require('gulp-mm');


gulp.task('build', function(){

    // html file
    mm.watch('src/**/*.html')
        .pipe(mm.inline())
        .pipe(mm.compile({members: ['shenfei', 'rongle', 'gaby', 'aster', 'bear', 'xx', 'jf']}))
        .pipe(gulp.dest('./'));

    mm.watch(['src/**/*.jpg', 'src/**/*.png'])
        .pipe(gulp.dest('./'));
});

/**
 * start a express server with socket
 */
gulp.task('server', function(){
   mm.server.start({root: __dirname});
});

/**
 * watch file
 */
gulp.task('watch', function(){
   mm.watch(['dist'], function(){
      mm.server.emit('change');
   });
});

gulp.task('default', ['build', 'server', 'watch']);