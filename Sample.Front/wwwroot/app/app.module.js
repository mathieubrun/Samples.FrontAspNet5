(function () {
    'use strict';

    angular.module('app', [
        // Angular modules 
        'app.home',

        // Custom modules 

        // 3rd Party Modules
        'ui.router'
    ])
    .config(function ($urlRouterProvider, $stateProvider) {
        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/home");
    });
})();