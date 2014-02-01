// https://github.com/gruntjs/grunt-contrib-concat

module.exports = function(grunt) {

  grunt.config('concat', {
    options: {
      stripBanners: true,
    },
    build: {
      src: [
          'source/js/libs/*.js',    // All JS in the libs folder
          'source/js/vendor/*.js',  // All JS in the vendor folder
          'source/js/functions.js'  // This specific file
      ],
      dest: 'build/functions.js',
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');

};