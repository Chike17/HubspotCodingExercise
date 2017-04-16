module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              
      dist: {                            
        options: {                      
          style: 'expanded'
        },
        files: {                         
          'src/views/styles/main.css': 'src/views/styles/main.scss',
          'src/views/styles/media/media.css': 'src/views/styles/media/media.scss'

        }
      }
    },
    concat: {
      'dist': {
        'src': ['src/views/styles/main.css', 'src/views/styles/media/media.css'],
        'dest': 'src/views/styles/dist/allstyles.css'
      }, 
    },
    cssmin: {
      'dist': {
        'files': {
          'src/views/styles/dist/allstyles.min.css': 'src/views/styles/dist/allstyles.css'
        }
      }
    }
  });
    // Load required modules
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Task definitions
  grunt.registerTask('default', ['sass', 'concat', 'cssmin']);

};