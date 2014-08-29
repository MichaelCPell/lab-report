angular.module('Items').directive('addItemMenu', function(){
  return{
    restrict: 'E',
    templateUrl: "/ng/partials/add-item-menu.html",
    controller: "ItemMenuController"
  }
})


angular.module('Items').directive('addItemEditor', ['$compile', function($compile){
    return{
      restrict: 'A',
      link: function(scope, element, attrs){
        element.on('click', function(e){
          $(".clearable").remove()

          angular.element("#content-box").prepend($compile("<item-editor class='clearable'></item-editor>")(scope))
        });
      }
    }
  }]
)


