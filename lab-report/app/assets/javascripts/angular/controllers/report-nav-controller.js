'use strict';

angular.module('Reports').controller("ReportNavController",  ['$scope', 'ReportsRest', '$routeParams', function($scope, ReportsRest, $routeParams){

    // $scope.treeData = new kendo.data.HierarchicalDataSource();


    
    ReportsRest.get({reportId: $routeParams.id}, function(data){
      console.log(data)
      $scope.treeData = new kendo.data.HierarchicalDataSource(data: data);
    })  

    $scope.itemTemplate = "Foo";

    $scope.click = function(dataItem) {
      alert(dataItem.text);
    };

    function makeItem() {
      var txt = kendo.toString(new Date(), "HH:mm:ss");
      return { text: txt };
    };

    $scope.addAfter = function(item) {
      var array = item.parent();
      var index = array.indexOf(item);
      var newItem = makeItem();
      array.splice(index + 1, 0, newItem);
    };

    $scope.addBelow = function() {
      // can't get this to work by just modifying the data source
      // therefore we're using tree.append instead.
      var newItem = makeItem();
      $scope.tree.append(newItem, $scope.tree.select());
    };

    $scope.remove = function(item) {
      var array = item.parent();
      var index = array.indexOf(item);
      array.splice(index, 1);
    };

    window.$scope = $scope;

  }
]);