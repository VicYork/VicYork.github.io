angular.module('vicyork')
  .controller('PortfolioController', ['$scope', '$location', function($scope, $location) {
    $scope.linkTo = function(id) {
      $location.url(id);
    };
  }]);
