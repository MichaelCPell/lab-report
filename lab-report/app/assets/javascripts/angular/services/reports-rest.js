angular.module('Reports').factory('ReportsRest', ['$resource', function($resource){

  return $resource('/reports/:reportId.json', { 
    reportId: '@id'
  }, {
    update: {
      method: 'PUT',
    }
  });

}]);