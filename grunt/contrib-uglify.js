// https://github.com/gruntjs/grunt-contrib-uglify

module.exports = function(grunt) {

  grunt.config('uglify', {

    build: {
      options: {
        mangle: false
      },
      files: {
        'build/functions.js': [ 'build/**/*.js' ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};