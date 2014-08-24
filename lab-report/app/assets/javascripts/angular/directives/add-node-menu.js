angular.module('Nodes').directive('addNodeMenu', function(){
  return{
    restrict: 'E',
    templateUrl: "assets/add-node-menu.html",
    controller: "NodeMenuController"
  }
})


angular.module('Nodes').directive('addNodeEditor', ['$compile', function($compile){
    return{
      restrict: 'A',
      link: function(scope, element, attrs){
        
        element.on('click', function(){
          $(".clearable").remove()
          scope.node = {}
          scope.node.title = "Some new node"

          element.parent().prepend($compile("<node-editor class='clearable'></node-editor>")(scope))
        });
      }
    }
  }]
)


