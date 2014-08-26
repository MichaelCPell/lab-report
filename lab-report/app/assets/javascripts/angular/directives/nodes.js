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
        element.on('click', function(e){
          $(".clearable").remove()

          angular.element("#content-box").prepend($compile("<node-editor class='clearable'></node-editor>")(scope))
        });
      }
    }
  }]
)


