'use strict';

angular.module('Reports').controller("ReportNavController",  ['$scope', 'ReportsRest', '$routeParams', 'ItemsRest', function($scope, ReportsRest, $routeParams, ItemsRest){

    // $scope.treeData = new kendo.data.HierarchicalDataSource();

    // $scope.treeData = new kendo.data.HierarchicalDataSource({ data: [
    //   { text: "Item 1" },
    //   { text: "Item 2", items: [
    //     { text: "SubItem 2.1" },
    //     { text: "SubItem 2.2" }
    //   ] },
    //   { text: "Item 3" }
    // ]});


    var report_for_tree = [
        { text: "Item 1" },
        { text: "Item 2", items: [
            { text: "SubItem 2.1" },
            { text: "SubItem 2.2" }
          ] },
        { text: "Item 3" }
      ];




    ReportsRest.get({reportId: $routeParams.id}).$promise.then(function(data){
      var foo = [{title: data.title, items: data.items}]
      $scope.treeData = new kendo.data.HierarchicalDataSource({data: foo});

    })

    $scope.itemTemplate = "<a href='' ng-click='setItem(dataItem)' add-item-editor>{{dataItem.title}}</a>";

    $scope.click = function(dataItem) {
      alert(dataItem.title);
    };

    function makeItem() {
      var txt = kendo.toString(new Date(), "HH:mm:ss");
      return { title: txt, report_id: $scope.report.id};
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
      // var newItem = makeItem();
      console.log($scope.tree.select());
      // ItemsRest.save(newItem);
      // $scope.tree.append(newItem, $scope.tree.select());
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