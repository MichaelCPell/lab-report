'use strict';

angular.module('Reports').controller("ReportsController", ['$scope', 'ReportsRest', function($scope, ReportsRest){

    $scope.findOrCreateReport = function(){
      if($scope.report == null){
        ReportsRest.save({},function(data){
          console.log("Data from create()s")
          console.log(data)
          $scope.report = {id: data._id.$oid}
        })
      }else{
        ReportsRest.get({reportId: $scope.reportId}, function(data){
          console.log("Data from GET")
          console.log(data)
        })
      }
    }
    
    $scope.updateReport = function() {
      ReportsRest.update({id: $scope.report.id, report: $scope.report})
    };

    console.log("ReportsController Successfully Loaded!");
  }
]);