;(function(){
  'use strict';

  angular.module('batApp')
  .controller('SessionDataController', function($scope, $routeParams, sessionDataFactory, SharedState){
    var vm = this;
    var id = $routeParams.id;

    SharedState.initialize($scope, "activeDropdown");

    sessionDataFactory.getSessionData(id, function(data){
      vm.sessionData = data;
    });

    vm.deleteDataSet = function(sessionDataId) {
      sessionDataFactory.deleteSessionData(sessionDataId, function() {
        delete vm.sessionData[sessionDataId];
      });
    };    

  });
}());
