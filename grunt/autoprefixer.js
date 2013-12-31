// https://github.com/nDmitry/grunt-autoprefixer

module.exports = function(grunt) {

  grunt.config('autoprefixer', {
    options: {
      browsers: ['last 2 versions'] // additional options: 'ie 8', 'ie 9'
    },

    build: {
      expand: true,
      cwd: 'build',
      src: [ '**/*.css' ],
      dest: 'build'
    }

  });

  grunt.loadNpmTasks('grunt-autoprefixer');

};