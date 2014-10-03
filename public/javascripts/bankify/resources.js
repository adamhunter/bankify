Bankify.Beer = Bankify.factory('Beer', ['$resource', function($resource) {
  return $resource(Bankify.Proxies.beers);
}]);
