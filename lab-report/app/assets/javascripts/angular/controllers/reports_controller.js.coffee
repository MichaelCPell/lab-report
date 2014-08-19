angular.module("Reports").controller "ReportsController", [
  "$scope"
  ($scope) ->
    $scope.updateReport = ->
      ReportRest.write($scope.report)

    return console.log("ReportsController Successfully Loaded!")
]