// https://github.com/gruntjs/grunt-contrib-connect

module.exports = function(grunt) {

  grunt.config('connect', {

    server: {
      options: {
        base: 'build/wwwroot'
      },
      dev: {},
      prod: {
        options: {
          keepalive: true,
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

};