'use strict';

angular.module('Reports').controller("ReportsController", ['$scope', 'ReportsRest', '$routeParams', '$routeParams', function($scope, ReportsRest, $routeParams){
    $scope.item = {title: "bar"}

    ReportsRest.query({}, function(data){
      $scope.reports = data;
    });

    $scope.findOrCreateReport = function(){
      if($routeParams.id == null){
        ReportsRest.save({},function(data){
          $scope.report = data
          window.location = "/#!/reports/" + $scope.report.id

        })
      }else{
        $scope.report = ReportsRest.get({reportId: $routeParams.id})  
      }
    }
    
    $scope.updateReport = function() {
      var report_without_items = $scope.report
      delete report_without_items.items
      ReportsRest.update({id: $scope.report.id, report: report_without_items})
    };

    $scope.deleteReport = function(){
      ReportsRest.delete({reportId: $scope.report.id})
      window.location = "/#!/reports"
    }




  }
]);