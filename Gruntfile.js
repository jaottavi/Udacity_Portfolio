module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 250
          }, {
            upscale: true,
            width: 400
          }, {
            upscale: true,
            width: 800
          }, {
            upscale: true,
            width: 1000
          }, {
            upscale: true,
            width: 1500
          }]
        },
        files: [{
          expand: true,
          src: ['images_src/*.{gif,jpg,png)}'],
          cwd: './',
          dest: 'images/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
}
