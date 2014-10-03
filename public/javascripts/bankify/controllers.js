Bankify.MainController = Bankify.controller('MainController', ['$scope', '$http', function($scope, $http) {
  var self = this;

  $scope.query = {};

  $http.get(Bankify.Proxies.beers).success(function(response, statusCode) {
    $scope.beers = response;
  });

}]);
