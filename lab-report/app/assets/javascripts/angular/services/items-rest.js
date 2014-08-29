angular.module('Items').factory('ItemsRest', ['$resource', function($resource){

  return $resource('/reports/:reportId/items/:itemId.json', { 
    reportId: '@report_id',
    itemId: '@id'
  }, {
    update: {
      method: 'PUT',
    }
  });

}]);