angular.module('Nodes').factory('NodesRest', ['$resource', function($resource){

  return $resource('/reports/:reportId/nodes/:nodeId.json', { 
    reportId: '@report_id',
    nodeId: '@id'
  }, {
    update: {
      method: 'PUT',
    }
  });

}]);