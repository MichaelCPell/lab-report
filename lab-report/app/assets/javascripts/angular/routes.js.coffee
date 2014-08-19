angular.module(ApplicationConfiguration.applicationModuleName).config(['$routeProvider', ($routeProvider) ->
  # Route for '/post'
  $routeProvider.when('/reports/new', { 
    templateUrl: '/assets/reports/new.html'
  })

  # # Default
  $routeProvider.otherwise({ 
      templateUrl: '/assets/reports/new.html'
    })

])