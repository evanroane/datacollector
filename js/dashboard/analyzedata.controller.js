;(function(){
  'use strict';

  angular.module('batApp')
  .controller('AnalyzeDataController', function($scope, $routeParams, sessionDataFactory) {
    var vm = this;
    var id = $routeParams.id;


    sessionDataFactory.getSessionData(id, function(data){
      vm.sessionData = data;

      $scope.startDate = moment(vm.sessionData.startDate)
        .format("dddd, MMMM Do YYYY, h:mm:ss a");
      $scope.endDate = moment(vm.sessionData.endDate)
        .format("dddd, MMMM Do YYYY, h:mm:ss a");
      $scope.instances = vm.sessionData.behaviorInstances;
      $scope.data = vm.sessionData.summary;

      console.log($scope.instances);
      console.log($scope.data);
    });

    // $scope.data = [
    //   {x: 0, value: 4, otherValue: 14},
    //   {x: 1, value: 8, otherValue: 1},
    //   {x: 2, value: 15, otherValue: 11},
    //   {x: 3, value: 16, otherValue: 147},
    //   {x: 4, value: 23, otherValue: 87},
    //   {x: 5, value: 42, otherValue: 45}
    // ];
    console.log($scope.data);



    $scope.options = {
      series: [
        {
          y: "val_0",
          label: "The best column series ever",
          color: "#2ca02c",
          type: "column",
          axis: "y",
          id: "series_0"
        }
      ],
      stacks: [],
      axes: {x: {type: "linear", key: "x"}, y: {type: "linear"}},
      lineMode: "linear",
      tension: 0.7,
      tooltip: {mode: "none"},
      drawLegend: true,
      drawDots: true,
      columnsHGap: 5
  };


  })
}());
