module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                mangle: true
            },
            target: {
                files: {
                    'dist/styleit.min.js': ['src/styleit.js']
                }
            }
        },
        less: {
            options: {
                compress: true
            },
            prod: {
                cleancss: true,
                files: {
                    'dist/styleit.css': ['src/styleit.less']
                }

            }
        },

        watch: {
            dist: {
                files: ['src/styleit.js', 'src/styleit.less'],
                tasks: ['default']
            }
        }
    });

    // Main tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'uglify']);
    grunt.registerTask('w', ['watch']);

};