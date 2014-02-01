// https://github.com/gruntjs/grunt-contrib-uglify

module.exports = function(grunt) {

  grunt.config('clean', {

    build: {
      src: [ 'build' ]
    },
    stylesheets: {
      src: [ 'build/**/*.css' ]
    },
    scripts: {
      src: [ 'build/**/*.js' ]
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');

};