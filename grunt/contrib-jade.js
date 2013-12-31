// https://github.com/gruntjs/grunt-contrib-jade

module.exports = function(grunt) {

  grunt.config('jade', {
    compile: {
      options: {
        data: {}
      },
      files: [{
        expand: true,
        cwd: 'source/pages',
        src: [ '**/*.jade' ],
        dest: 'build',
        ext: '.html'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

};