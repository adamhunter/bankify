Bankify.directive('bankBeerPic', [function() {
  return {
    template: function(tElement, tAttrs) {
      return angular.element('<img>').attr('src', tAttrs.bankBeerPic);
    },
    link: function(scope, iElement, iAttrs, controller) {
      iElement.find('img').on('click', function(event) { console.log('that tickles'); });
    }
  }
}]);
