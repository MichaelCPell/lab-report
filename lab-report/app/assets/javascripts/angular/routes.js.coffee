angular.module(ApplicationConfiguration.applicationModuleName).config(['$routeProvider', ($routeProvider) ->
  # Route for '/post'
  $routeProvider.when('/reports/new', { 
    templateUrl: '/assets/reports/new.html',
    controller: 'ReportsController'
  })

  $routeProvider.when('/reports', { 
    templateUrl: '/assets/reports/index.html',
    controller: 'ReportsController'
  })


  $routeProvider.when('/reports/:id', { 
    templateUrl: '/assets/reports/show.html',
    controller: 'ReportsController'
  })

  # # Default
  $routeProvider.otherwise({ 
      templateUrl: '/assets/reports/new.html'
    })

])