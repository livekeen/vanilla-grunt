// https://github.com/gruntjs/grunt-contrib-uglify

module.exports = function(grunt) {

  grunt.config('uglify', {

    build: {
      options: {
        mangle: false
      },

      src: 'build/*.js',
      dest: 'build/functions.js'
      
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

};