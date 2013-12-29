// https://github.com/gruntjs/grunt-contrib-jade

module.exports = function(grunt) {

  grunt.config('jade', {
    // options: {
    //   data: {
    //     config: require('../config/app'),
    //     target: '<%= grunt.task.current.target %>',
    //   },
    // },
    dev: {
      expand: true,
      cwd: 'app/pages',
      src: '*.jade',
      dest: 'build',
      ext: '.html',
    },
    prod: '<%= jade.dev %>',
  });

  grunt.loadNpmTasks('grunt-contrib-jade');

};