'use strict';

angular.module('vicyork')
  .config(function($stateProvider) {
    // Home states
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'client/app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      //Sub states if needed

      /*.state('home.main', {
       url: "/",
       templateUrl: "partials/state1.html"
       })
       .state('state1.list', {
       url: "/list",
       templateUrl: "partials/state1.list.html",
       controller: function($scope) {
       $scope.items = ["A", "List", "Of", "Items"];
       }
       })
       .state('state2', {
       url: "/state2",
       templateUrl: "partials/state2.html"
       })
       .state('state2.list', {
       url: "/list",
       templateUrl: "partials/state2.list.html",
       controller: function($scope) {
       $scope.things = ["A", "Set", "Of", "Things"];
       }
       })*/;
  });
