// https://github.com/gruntjs/grunt-contrib-sass

module.exports = function(grunt) {

  grunt.config('sass', {
    dist: {
      options: {
        style: 'compressed'
      },
      files: {
        // 'destination': 'source'
        'build/assets/css/styles.css': 'app/assets/sass/styles.sass'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

};