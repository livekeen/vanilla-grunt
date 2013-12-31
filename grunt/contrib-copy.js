// https://github.com/gruntjs/grunt-contrib-uglify

module.exports = function(grunt) {

  grunt.config('copy', {

    build: {
      cwd: 'source',
      src: [ '**', '!**/*.sass', '!**/*.scss', '!**/*.coffee', '!**/*.jade' ],
      dest: 'build',
      expand: true
    },

  });

  grunt.loadNpmTasks('grunt-contrib-copy');

};