// https://github.com/gruntjs/grunt-contrib-watch

module.exports = function(grunt) {

  grunt.config('watch', {

    stylesheets: {
      files: ['source/**/*.sass', 'source/**/*.scss'],
      tasks: [ 'stylesheets' ],
      options: {
        livereload: true,
      }
    },
    scripts: {
      files: 'source/**/*.js',
      tasks: [ 'scripts'],
      options: {
        livereload: true,
      }
    },
    jade: {
      files: 'source/**/*.jade',
      tasks: [ 'jade' ],
      options: {
        livereload: true,
      }
    },
    copy: {
      files: [ 'source/**', '!source/**/*.sass', '!source/**/*.scss', '!source/**/*.coffee', '!source/**/*.js', '!source/**/*.jade' ],
      tasks: [ 'copy', 'cleanempty' ]
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};