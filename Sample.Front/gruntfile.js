module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.initConfig({
        paths: {
            app: 'wwwroot',
            dist: 'dist'
        },

        injector: {
            options: {
                lineEnding: "\r\n", // this is a Windows centric sample ;)
                relative: true, // relative to injection target file
                addRootSlash: false
            },

            // application scripts injection sub-task
            appScripts: {
                files: {
                    '<%= paths.app %>/index.html': [
                        '<%= paths.app %>/app/**/*.module.js',
                        '<%= paths.app %>/app/**/*.js',
                        '!<%= paths.app %>/app/**/*.spec.js'
                    ]
                }
            },

            // application css injection sub-task
            appCss: {
                files: {
                    '<%= paths.app %>/index.html': [
                        '<%= paths.app %>/styles/**/*.css'
                    ]
                }
            }
        },

        wiredep: {
            app: {
                src: [
                    '<%= paths.app %>/index.html'
                ]
            }
        }
    });
};