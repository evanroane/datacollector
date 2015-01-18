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






  })
}());
