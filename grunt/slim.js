// https://github.com/matsumos/grunt-slim

module.exports = function(grunt) {

  grunt.config('slim', {
    dist: {
      files: [{
        expand: true,
        cwd: 'source/pages',
        src: [ '{,*/}*.slim' ],
        dest: 'build',
        ext: '.html'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-slim');

};