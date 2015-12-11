﻿(function () {
    'use strict';

    angular.module('app.home', ['ui.router'])
        .config(function ($stateProvider) {
            // Now set up the states
            $stateProvider
              .state('home', {
                  url: "/home",
                  templateUrl: "app/home/home.template.html",
                  controller: "HomeController",
                  controllerAs: "home"
              });
        });
})();
