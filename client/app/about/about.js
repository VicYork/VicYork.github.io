'use strict';

angular.module('vicyork')
  .config(function($stateProvider) {
    // Home states
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'client/app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      })
  });
