'use strict';

angular.module('Reports').controller("ReportNavController",  ['$scope', 'ReportsRest', '$routeParams', 'ItemsRest', function($scope, ReportsRest, $routeParams, ItemsRest){

    ReportsRest.get({reportId: $routeParams.id}).$promise.then(function(data){
      var foo = data.items
      $scope.treeData = new kendo.data.HierarchicalDataSource({data: foo});

    })

    $scope.itemTemplate = "<span ng-click='setItem(dataItem)' add-item-editor>{{dataItem.title}}</span>";

    $scope.click = function(dataItem) {
      alert(dataItem.title);
    };

    function makeItem() {
      var txt = kendo.toString(new Date(), "HH:mm:ss");
      return { 
        report_id: $scope.report.id,
        parent_id: $scope.item.id,
        item: {
          title: txt
        }
      };
    };

    $scope.addFirst = function() {
      var newItem = makeItem();
      ItemsRest.save(newItem, function(data){
        var savedItem = {
          id: data.id,
          title: data.title,
          content: data.content
        };
        $scope.tree.append(savedItem);
      });
    };

    $scope.addAfter = function(item) {
      var array = item.parent();
      var index = array.indexOf(item);
      var newItem = makeItem();
      ItemsRest.save(newItem, function(data){
        var savedItem = {
          id: data.id,
          title: data.title,
          content: data.content
        };
        array.splice(index + 1, 0,savedItem)
      });
    };

    $scope.addBelow = function() {
      // can't get this to work by just modifying the data source
      // therefore we're using tree.append instead.
      var newItem = makeItem();
      ItemsRest.save(newItem, function(data){
        var savedItem = {
          id: data.id,
          title: data.title,
          content: data.content
        };

        $scope.tree.append(savedItem, $scope.tree.select());
      });
    };

    $scope.remove = function(item) {
      var array = item.parent();
      var index = array.indexOf(item);
      array.splice(index, 1);
    };


    $scope.setItem = function(item){
      $scope.item = item
    }

    $scope.clearItem = function(){
      $scope.item = {}
    }

  }
]);