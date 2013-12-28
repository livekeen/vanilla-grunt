// https://github.com/gruntjs/grunt-contrib-imagemin

module.exports = function(grunt) {

  grunt.config('imagemin', {
    dynamic: {
      files: [{
        expand: true,
        cwd: 'app/assets/img/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'build/assets/img/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');

};