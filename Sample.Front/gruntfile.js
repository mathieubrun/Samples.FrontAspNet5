/// <binding ProjectOpened='watch' />
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.initConfig({
        paths: {
            app: 'wwwroot',
            dist: 'dist'
        },

        watch: {
            // adding or removing a js file trigger injections
            injections: {
                files: ['<%= paths.app %>/app/**/*.js'],
                tasks: ['wiredep', 'injector'],
                options: {
                    event: ['added', 'deleted'],
                },
            },
            
            // changing an application file triggers automated tests
            tests: {
                files: ['<%= paths.app %>/app/**/*.js'],
                tasks: ['karma:unit']
            }
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
            },

            testScripts: {
                options: {
                    transform: function (filePath) {
                        return "'" + filePath + "',";
                    },
                    starttag: '// injector:js',
                    endtag: '// endinjector'
                },
                files: {
                    'test/karma.conf.js': [
                        '<%= paths.app %>/app/**/*.module.js',
                        '<%= paths.app %>/app/**/*.js',
                        '<%= paths.app %>/app/**/*.spec.js'
                    ]
                }
            },

            testRunnerScripts: {
                files: {
                    'test/runner/index.html': [
                        '<%= paths.app %>/app/**/*.module.js',
                        '<%= paths.app %>/app/**/*.js',
                        '<%= paths.app %>/app/**/*.spec.js'
                    ]
                }
            }
        },

        wiredep: {
            app: {
                src: [
                    '<%= paths.app %>/index.html'
                ]
            },

            tests: {
                options: {
                    // this will allow angular-mocks to be injected
                    devDependencies: true
                },
                src: [
                  'test/karma.conf.js', 'test/runner/index.html'
                ]
            }
        },
        
        karma: {
            allBrowsers: {
                configFile: 'test/karma.conf.js',
                browsers: ['Chrome', 'IE']
            },
            unit: {
                configFile: 'test/karma.conf.js',
                browsers: ['PhantomJS']
            },
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'wwwroot'
                }
            }
        },
        
        protractor: {
            run: {
                options: {
                    configFile: "test/protractor.conf.js",
                    webdriverManagerUpdate: true
                }
            }
        }
    });

    grunt.registerTask('test:e2e', [
        'connect:server',
        'protractor:run'
    ]);
};