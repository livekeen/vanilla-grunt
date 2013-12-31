// https://github.com/gruntjs/grunt-contrib-connect

module.exports = function(grunt) {

  grunt.config('connect', {

    server: {
      options: {
        port: 8000,
        base: 'build',
        hostname: '*'
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