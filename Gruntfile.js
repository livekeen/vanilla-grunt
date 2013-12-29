module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  // Default task(s).
  grunt.registerTask('dev',
    'Start a live-reloading dev webserver on localhost.',
    ['sass', 'imagemin', 'jade:dev', 'connect', 'watch']);

  grunt.registerTask('default', ['dev']);

};