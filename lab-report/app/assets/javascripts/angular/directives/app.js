angular.module('App').directive('ngReallyClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngReallyMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngReallyClick);
                }
            });
        }
    }
}]);

angular.module('App').directive('focusMe', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element[0].focus(); 
    }
  }
});