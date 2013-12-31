module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  // Default task(s).
  grunt.registerTask(
    'stylesheets', 
    'Compiles the stylesheets.', 
    [ 'sass', 'autoprefixer', 'clean:stylesheets' ]
  );

  grunt.registerTask(
    'scripts', 
    'Compiles the JavaScript files.', 
    [ 'uglify', 'clean:scripts' ]
  );

  grunt.registerTask(
    'build', 
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean:build', 'copy', 'stylesheets', 'scripts', 'jade' ]
  );

  grunt.registerTask(
    'dev',
    'Start a live-reloading dev webserver on localhost.',
    [ 'build', 'connect', 'watch' ]);

  grunt.registerTask('default', ['dev']);

};