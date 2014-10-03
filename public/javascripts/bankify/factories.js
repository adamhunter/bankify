Bankify.factory('beerChart', ['$http', '$rootScope', function($http, $rootScope) {
  var $promise = $http.get(Bankify.Proxies.chart)
  $promise.then(function(response) { $rootScope.$emit('beerChart.loaded', response.data); });
  return $promise;
}]);
