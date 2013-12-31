// https://github.com/stevenvachon/grunt-cleanempty

module.exports = function(grunt) {

  grunt.config('cleanempty', {

    build: {
      options: {
        files: false,
      },
      src: ['build/**']
    },

  });

  grunt.loadNpmTasks('grunt-cleanempty');

};