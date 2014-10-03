Bankify.factory('Beer', ['$resource', function($resource) {
  Bankify.Beer = $resource(Bankify.Proxies.beers, {}, 
    {persistEnFancification: {method: 'PATCH', params: {soFancy: 'alreadyKnow'}}}
  );

  Bankify.Beer.prototype.isFresh = function() {
    return this.id < 11;
  }

  return Bankify.Beer;
}]);
