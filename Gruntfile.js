module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  // Pre-task(s).
  grunt.registerTask(
    'stylesheets', 
    'Compiles the stylesheets.', 
    [ 'clean:stylesheets', 'sass', 'autoprefixer' ]
  );

  grunt.registerTask(
    'scripts', 
    'Compiles the JavaScript files.', 
    [ 'clean:scripts', 'uglify' ]
  );

  grunt.registerTask(
    'images', 
    'Compiles the Image files.', 
    [ 'imagemin' ]
  );

  grunt.registerTask(
    'build', 
    'Compiles all of the assets and copies the files to the build directory.', 
    [ 'clean:build', 'copy', 'stylesheets', 'scripts', 'images', 'jade', 'cleanempty' ]
  );
  
  // Default task(s).
  grunt.registerTask(
    'dev',
    'Start a live-reloading dev webserver on localhost.',
    [ 'build', 'connect', 'watch' ]);

  grunt.registerTask('default', ['dev']);

};