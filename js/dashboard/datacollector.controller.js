;(function(){
  'use strict';

  angular.module('batApp')
  .controller('TimeController', function($routeParams, timeFactory, codeSetFactory){
  var vm = this;
  var id = $routeParams.id;

  codeSetFactory.getCodeSet(id, function(data){
    vm.codeSetData = data;
  });

  vm.startSession = function() {
    timeFactory.startTimer();
  };

  vm.endSession = function() {
    timeFactory.stopTimer();
  };

  vm.event = function() {
    timeFactory.dataEvent();
  }

  vm.newEvent = function(eventName) {
    timeFactory.newDataEvent(eventName);
  }

 });
}());
