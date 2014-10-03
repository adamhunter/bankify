Bankify.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {redirectTo: function() { return "/beers"; }})
    .when('/beers',     {controller: 'BeersController as beersCtrl', templateUrl: '/templates/beers.html'})
    .when('/beers/:id', {controller: 'BeerController  as beerCtrl',  templateUrl: '/templates/beer.html' })
  ;
}]);
