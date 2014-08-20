angular.module('Reports').factory('ReportsRest', ['$resource', function($resource){

  return $resource('/reports/:reportId', { 
    reportId: '@id'
  }, {
    update: {
      method: 'PUT',
    }
  });

}]);