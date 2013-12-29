// https://github.com/gruntjs/grunt-contrib-watch

module.exports = function(grunt) {

  grunt.config('watch', {

    options: {
      livereload: true, // adds livereload support
    },

    // watches javascript files
    scripts: {  
      files: ['app/assets/js/*.js'],
      tasks: ['concat', 'uglify'],
      options: {
        spawn: false,
      },
    },

    // watches sass files
    css: { 
      files: ['app/assets/sass/*.sass'],
      tasks: ['sass'],
      options: {
        spawn: false,
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};