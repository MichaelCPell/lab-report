'use strict';

angular.module('Nodes').controller("NodesController", ['$scope', 'NodesRest', '$routeParams', function($scope, NodesRest, $routeParams){


    $scope.findOrCreateNode = function(){
      if($scope.node.id != null){
        return;
      }



      if($routeParams.nodeId == null){
        NodesRest.save({report_id: $scope.report.id}, function(data){
          $scope.node = data
          $scope.report.nodes.push($scope.node) 
        })
      }else{
        $scope.node = NodesRest.get({reportId: $scope.report.id, nodeId: $routeParams.id})  
      }
    }
    
    $scope.updateNode = function() {
      NodesRest.update({report_id: $scope.report.id, id: $scope.node.id, node: $scope.node})
    };
  }
]);