;(function(){
  'use strict';

  angular.module('batApp')
  .controller('SessionDataController', function($scope, $routeParams, sessionDataFactory, SharedState){
    var vm = this;
    var id = $routeParams.id;

    SharedState.initialize($scope, "activeDropdown");

    sessionDataFactory.getSessionData(id, function(data){
      vm.codeSet = data;
    });

    $scope.options = {
      lineMode: "cardinal",
      series: [
    {
      y: "val_0",
      label: "Stripes",
      type: "area",
      striped: true,
      color: "#1f77b4",
      axis: "y",
      thickness: "1px",
      id: "series_0"
    },
  {
    y: "val_1",
    label: "Are",
    type: "area",
    striped: true,
    color: "#ff7f0e",
    axis: "y",
    thickness: "1px",
    id: "series_1"
  },
{
  y: "val_2",
  label: "Sweet",
  type: "area",
  striped: true,
  color: "#2ca02c",
  axis: "y",
  thickness: "1px",
  id: "series_2"
}
],
stacks: [],
axes: {x: {type: "linear", key: "x"}, y: {type: "linear"}},
tension: 0.7,
tooltip: {mode: "scrubber"},
drawLegend: true,
drawDots: true,
columnsHGap: 5
};

$scope.data = [
{x: 0, value: "mand", otherValue: 14},
{x: 1, value: 8, otherValue: 1},
{x: 2, value: 15, otherValue: 11},
{x: 3, value: 16, otherValue: 147},
{x: 4, value: 23, otherValue: 87},
{x: 5, value: 42, otherValue: 45}
];



  });
}());
