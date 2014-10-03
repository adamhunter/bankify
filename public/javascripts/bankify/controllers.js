Bankify.MainController = Bankify.controller('MainController', ['$scope', function($scope) {
}]);

Bankify.BeersController = Bankify.controller('BeersController', ['$scope', 'Beer', 'Tracker', function($scope, Beer, tracker) {
  $scope.query = {};

  $scope.$watch('query', function(newQuery, oldQuery) {
    $scope.beers = tracker.track(Beer.query({query: $scope.query}));
  }, true);
}]);

Bankify.BeerController = Bankify.controller('BeerController', ['$scope', '$routeParams', 'Beer', 'Tracker', function($scope, $routeParams, Beer, tracker) {
  var self      = this;
  self.editable = false;
  $scope.beer   = tracker.track(Beer.get($routeParams));
  $scope.makeEditable = function() { self.editable = true;  }
  $scope.lockEditable = function() { self.editable = false; $scope.beer.$persistEnFancification() }
  $scope.isEditable   = function() { return self.editable;  }
  $scope.pic          = function() { return 'http://www.samuelsmithsbrewery.co.uk/wpimages/wpae81d34c.jpg'; }

  $scope.beerTemplate = function() { return "/templates/_" + ($scope.isEditable() ? 'edit' : 'show') + "_beer.html"; }
}]);
