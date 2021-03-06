// https://github.com/gruntjs/grunt-contrib-jade

module.exports = function(grunt) {

  grunt.config('jade', {
    build: {
      files: [{
        expand: true,
        cwd: 'source/pages',
        src: [ '{,*/}*.jade' ],
        dest: 'build',
        ext: '.html'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

};