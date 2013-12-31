// https://github.com/gruntjs/grunt-contrib-imagemin

module.exports = function(grunt) {

  grunt.config('imagemin', {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'source',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'build'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

};