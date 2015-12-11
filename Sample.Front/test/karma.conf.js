// Karma configuration file

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            '../wwwroot/lib/angular/angular.js',
            '../wwwroot/lib/ui-router/release/angular-ui-router.js',
            '../wwwroot/lib/angular-mocks/angular-mocks.js',
            // endbower
            // injector:js
            '../wwwroot/app/app.module.js',
            '../wwwroot/app/home/home.module.js',
            '../wwwroot/app/home/home.controller.js',
            '../wwwroot/app/home/home.controller.spec.js',
            // endinjector
        ],

        // test results reporter to use, report on console, and generate coverage
        reporters: ['progress', 'coverage'],

        // process application files (not test !) for coverage
        preprocessors: { '../wwwroot/app/**/!(*.spec).js': ['coverage'] },

        coverageReporter: {
            // specify a common output directory
            dir: 'artifacts/coverage',
            reporters: [
              { type: 'html', subdir: 'report-html' },
              { type: 'lcov', subdir: 'report-lcov' }
            ]
        },

        // enable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-ie-launcher',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};