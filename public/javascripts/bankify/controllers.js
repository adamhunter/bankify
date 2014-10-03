Bankify.MainController = Bankify.controller('MainController', ['$scope', 'Beer', function($scope, Beer) {
  var self = this;
  $scope.query = {};

  $scope.$watch('query', function(newQuery, oldQuery) {
    $scope.beers = Beer.query({query: $scope.query});
  }, true);
}]);
