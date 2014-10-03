Bankify.MainController = Bankify.controller('MainController', ['$scope', function($scope) {
}]);

Bankify.BeersController = Bankify.controller('BeersController', ['$scope', 'Beer', function($scope, Beer) {
  $scope.query = {};

  $scope.$watch('query', function(newQuery, oldQuery) {
    $scope.beers = Beer.query({query: $scope.query});
  }, true);
}]);

Bankify.BeerController = Bankify.controller('BeerController', ['$scope', 'Beer', '$routeParams', function($scope, Beer, $routeParams) {
  var self      = this;
  self.editable = false;
  $scope.beer   = Beer.get($routeParams);
  $scope.makeEditable = function() { self.editable = true;  }
  $scope.lockEditable = function() { self.editable = false; $scope.beer.$persistEnFancification() }
  $scope.isEditable   = function() { return self.editable;  }

  $scope.beerTemplate = function() { return "/templates/_" + ($scope.isEditable() ? 'edit' : 'show') + "_beer.html"; }
}]);
