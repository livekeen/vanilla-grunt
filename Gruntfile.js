module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};