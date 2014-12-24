;(function(){
  'use strict';

  angular.module('batApp')
  .controller('TimeController', function(timeFactory){
  var vm = this;

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
