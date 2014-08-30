angular.module('Items').directive('addItemMenu', function(){
  return{
    restrict: 'E',
    templateUrl: "/ng/partials/add-item-menu.html",
    controller: "ItemMenuController"
  }
})



