// https://github.com/gruntjs/grunt-contrib-watch

module.exports = function(grunt) {

  grunt.config('watch', {

    options: {
      livereload: true, // adds livereload support
    },

    stylesheets: {
      files: 'source/**/*.sass',
      tasks: [ 'stylesheets' ]
    },
    scripts: {
      files: 'source/**/*.js',
      tasks: [ 'scripts' ]
    },
    jade: {
      files: 'source/**/*.jade',
      tasks: [ 'jade' ]
    },
    copy: {
      files: [ 'source/**', '!source/**/*.sass', '!source/**/*.scss', '!source/**/*.coffee', '!source/**/*.jade' ],
      tasks: [ 'copy' ]
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};