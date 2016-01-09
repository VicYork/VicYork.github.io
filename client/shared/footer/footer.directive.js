'use strict';

angular.module('vicyork')
  .directive('fter', function() {
    return {
      templateUrl: 'client/shared/footer/footer.html',
      restrict: 'E',
      controller: 'FooterController',
      controllerAs: 'fter'
    }
  });
