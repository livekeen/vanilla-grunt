// https://github.com/gruntjs/grunt-contrib-sass

module.exports = function(grunt) {

  grunt.config('sass', {
    dist: {
      options: {
        style: 'compressed'
      },
      files: [{
        expand: true,
        cwd: 'source',
        src: '**/styles.sass',
        dest: 'build',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

};