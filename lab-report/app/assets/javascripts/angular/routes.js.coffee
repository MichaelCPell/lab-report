angular.module(ApplicationConfiguration.applicationModuleName).config(['$routeProvider', ($routeProvider) ->
  # Route for '/post'
  $routeProvider.when('/reports/new', { 
    templateUrl: 'ng/views/reports/new.html',
    controller: 'ReportsController'
  })

  $routeProvider.when('/reports', { 
    templateUrl: 'ng/views/reports/index.html',
    controller: 'ReportsController'
  })


  $routeProvider.when('/reports/:id', { 
    templateUrl: 'ng/views/reports/show.html',
    controller: 'ReportsController'
  })

  $routeProvider.when('/reports/:reportId/items/:itemId', { 
    templateUrl: 'ng/views/items/show.html',
    controller: 'ItemsController'
  })


  # Default
  $routeProvider.otherwise({ 
    templateUrl: 'ng/views/reports/new.html',
    controller: 'ReportsController'
  })

])