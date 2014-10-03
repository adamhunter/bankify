Bankify.filter('negative', function() {
  return function(input) {
    return input.toString().match(/^-/) ? '(' + input.toString().substring(1) + ')' : input;
  }
});
