'use strict';

angular.module('vicyork')
  .directive('nvbar', function() {
    return {
      templateUrl: 'client/shared/nav/navbar.html',
      restrict: 'E',
      controller: 'NavbarController',
      controllerAs: 'nav'
    }
  });
