angular.module('vicyork')
  .controller('HomeController', ['$scope', '$rootScope', '$location', '$log', function($scope, $rootScope, $location, $log) {
    $scope.yo = 'home is here on scope';

    $log.info($location);

    $log.log($location.path());

    if ($location.path() !== '/') {
      $scope.check = false;
    }


  }]);
