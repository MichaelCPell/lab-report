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

  $routeProvider.when('/reports/:reportId/nodes/:nodeId', { 
    templateUrl: 'ng/views/nodes/show.html',
    controller: 'NodesController'
  })


  # # Default
  # $routeProvider.otherwise({ 
  #   templateUrl: 'ng/views/reports/index.html',
  #   controller: 'ReportsController'
  # })

])