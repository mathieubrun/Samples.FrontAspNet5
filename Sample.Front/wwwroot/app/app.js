(function () {
    'use strict';

    angular.module('app', [
        // Angular modules 

        // Custom modules 

        // 3rd Party Modules
        'ui.router'
    ])
    .config(function ($urlRouterProvider, $stateProvider) {
        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise("/home");
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/app.template.html",
                controller: "HomeController",
                controllerAs: "home"
            });
    })
    .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        vm.title = 'Hello world';
    };
})();