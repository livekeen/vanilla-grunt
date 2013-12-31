// https://github.com/gruntjs/grunt-contrib-uglify

module.exports = function(grunt) {

  grunt.config('cssmin', {

    build: {
      files: {
        'build/styles.css': [ 'build/**/*.css' ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

};