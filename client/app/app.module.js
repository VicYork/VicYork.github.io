'use strict';

angular.module('vicyork', [])
  .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
  });
