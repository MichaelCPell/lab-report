'use strict';

angular.module('Items').controller("ItemsController", ['$scope', 'ItemsRest', '$routeParams', function($scope, ItemsRest, $routeParams){


    $scope.findOrCreateItem = function(){
      if($scope.item.id != null){
        return;
      }

      if($routeParams.itemId == null){
        ItemsRest.save({report_id: $scope.report.id}, function(data){
          $scope.item = data
          $scope.report.items.push($scope.item) 
        })
      }else{
        $scope.item = ItemsRest.get({reportId: $scope.report.id, itemId: $routeParams.id})  
      }
    }
    
    $scope.updateItem = function() {
      ItemsRest.update({report_id: $scope.report.id, id: $scope.item.id, item: $scope.item})
    };
  }
]);