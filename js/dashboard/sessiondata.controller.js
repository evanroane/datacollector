;(function(){
  'use strict';

  angular.module('batApp')
  .controller('SessionDataController', function($scope, $routeParams, sessionDataFactory){
    var vm = this;
    var id = $routeParams.id;

    sessionDataFactory.getSessionData(id, function(data){
      vm.codeSet = data;
    });





  });
}());
