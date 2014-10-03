Bankify.factory('Beer', ['$resource', function($resource) {
  Bankify.Beer = $resource(Bankify.Proxies.beers, {}, 
    {persistEnFancification: {method: 'PATCH', params: {soFancy: 'alreadyKnow'}}}
  );

  return Bankify.Beer;
}]);
