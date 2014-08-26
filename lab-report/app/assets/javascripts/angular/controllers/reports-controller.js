'use strict';

angular.module('Reports').controller("ReportsController", ['$scope', 'ReportsRest', '$routeParams', function($scope, ReportsRest, $routeParams){
    $scope.node = {}

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
      ReportsRest.update({id: $scope.report.id, report: $scope.report})
    };

    $scope.deleteReport = function(){
      ReportsRest.delete({reportId: $scope.report.id})
      window.location = "/#!/reports"
    }


    $scope.setNode = function(node){
      $scope.node = node
    }

    $scope.clearNode = function(){
      $scope.node = {}
    }
  }
]);