Bankify.MainController = Bankify.controller('MainController', ['$scope', function($scope) {
}]);

Bankify.BeersController = Bankify.controller('BeersController', ['$scope', 'Beer', function($scope, Beer) {
  $scope.query = {};

  $scope.$watch('query', function(newQuery, oldQuery) {
    $scope.beers = Beer.query({query: $scope.query});
  }, true);
}]);

Bankify.BeerController = Bankify.controller('BeerController', ['$scope', 'Beer', function($scope, Beer) {
}]);
