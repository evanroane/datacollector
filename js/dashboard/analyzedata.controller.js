;(function(){
  'use strict';

  angular.module('batApp')
  .controller('AnalyzeDataController', function($scope, $routeParams, sessionDataFactory, codeSetFactory) {
    var vm = this;
    var id = $routeParams.id;
    var instances;


    sessionDataFactory.getSessionData(id, function(data){
      vm.sessionData = data;
      $scope.startDate = vm.sessionData.startDate;
      var instances = vm.sessionData.behaviorInstances;
      console.log(instances);
      return instances;
    });

  })
}());
