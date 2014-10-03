Bankify.directive('bankBeerPic', ['$rootScope', '$parse', 'beerChart', function($rootScope, $parse, beerChart) {
  return {
    template: function(tElement, tAttrs) {
      var cont  = angular.element('<div>');
      var stats = angular.element('<div>').attr('id', 'beer-bank-pic-stats');
      var img   = angular.element('<img>').attr('src', tAttrs.bankBeerPic);
      return cont.append(stats).append(img);
    },
    link: function($scope, iElement, iAttrs, controller) {
      // $scope.$watch(function() { beerChart.resolved }, function(newValue, oldValue) {
      //   iElement.find('#beer-bank-pic-stats').text(beerChart.chart.drunks);
      // });
      // will need $scope.$apply() to kick off digest
      // beerChart.then(function(response) { 
      //   iElement.find('#beer-bank-pic-stats').text(response.data.drunks);
      // });
      //
      $rootScope.$on('beerChart.loaded', function(event, chart) {
        // $scope.drunks = chart.drunks;
        iElement.find('#beer-bank-pic-stats').text($parse('drunks | number')(chart));
      });
      iElement.find('img').on('click', function(event) { console.log('that tickles'); });
    }
  }
}]);

Bankify.directive('bankCoolChart', [function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/bank_cool_chart.html',
    controller: ['$scope', '$element', '$attrs', '$transclude', 'beerChart', 
      function($scope, $element, $attrs, $transclude, beerChart) {
        beerChart.then(function(response) { $scope.chart = response.data; });
      }
    ],
    link: function($scope, iElement, iAttrs, controller) {
      iElement.hide();
      $scope.$watch('chart', function(newChart, oldChart) {
        if (newChart) {
          var stupidTime = Math.round($scope.chart.drunks / 100);
          iElement.fadeIn(stupidTime);
        }
      });
    }
  }
}])
