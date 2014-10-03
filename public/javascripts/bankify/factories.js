Bankify.factory('beerFresh', [function() {
  beerFresh = function(beer) {
    // beer.$promise.then(function() {
    //   console.log(beer.id, beer.id < 11);
    //   beer.fresh = beer.id < this.cap ? true : false;
    // })
  }

  beerFresh.cap = 11

  return beerFresh;
}]);
