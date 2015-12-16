exports.config = {
    // not required in standalone mode
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/scenarios.js'],
    baseUrl: 'http://localhost:9001',
    rootElement: '[ng-app]',
    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }]
}