'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
    	dist:{
    		files:{
    			'style/style.css' : 'sass/style.scss'
    		}
    	}
    }  
});
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass']);
};