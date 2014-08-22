'use strict';

angular.module('Reports').controller("ReportsController", ['$scope', 'ReportsRest', '$routeParams', function($scope, ReportsRest, $routeParams){

    ReportsRest.query({}, function(data){
      $scope.reports = data;
    });


    $scope.findOrCreateReport = function(){
      if($routeParams.id == null){
        ReportsRest.save({},function(data){
          $scope.report = data
        })
      }else{
        $scope.report = ReportsRest.get({reportId: $routeParams.id})      
      }
    }
    
    $scope.updateReport = function() {
      ReportsRest.update({id: $scope.report._id.$oid, report: $scope.report})
    };
  }
]);