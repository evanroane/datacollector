;(function(){
  'use strict';

  angular.module('batApp')
  .controller('TimeController', function($scope, $routeParams, codeSetFactory, timeFactory){
  var vm = this;
  var id = $routeParams.id;
  var beginTime,
    endTime,
    timer;
  var timerRunning = !true;

  $scope.sessionData = {
    "startDate": "a",
    "endDate": "b",
    "name": "c",
    "description": "d",
    "codeSetName": "e",
    "behaviorInstances": []
  };

  codeSetFactory.getCodeSet(id, function(data){
    vm.codeSetData = data;
  });

  vm.displayTimer = function() {
    var secondsSinceBegin = moment.duration(Date.now() - beginTime).asSeconds();
    var formatAsTimer = moment()
    .hour(0)
    .minute(0)
    .second(secondsSinceBegin)
    .format('HH:mm:ss');
    document.getElementById('time-container').innerHTML = formatAsTimer;
    // setTimeout(function() {timerRunning && timer()}, 1000)
    console.log(formatAsTimer);
  };

  vm.startTimer = function() {
    if (timerRunning === true) {
      console.log("Timer is already started");
    } else {
      beginTime = new Date();
      timer = setInterval(function() {vm.displayTimer() }, 1000);
      timerRunning = true;
      var startFullDate = moment(beginTime).format('MMMM Do YYYY, h:mm:ss a');
      $( '.records' ).append('Started: ' + startFullDate + "<br>" );
      return timerRunning;
    }
  };

  vm.stopTimer = function() {
    if (timerRunning === false) {
      console.log("You can't stop a timer that isn't running");
    } else {
      endTime = new Date();
      timerRunning = false;
      var endFullDate = moment(endTime).format('MMMM Do YYYY, h:mm:ss a');
      $( '.records' ).append( 'Ended: ' + endFullDate + '<br>' );
      clearInterval(timer);
      console.log('The Timer Has Been Stopped');
      return timerRunning;
    }
  };

  vm.dataEvent = function(eventName, buttonId) {
    if (timerRunning === false) {
      console.log("Not going to happen");
      } else {
        var now = new Date();
        var eventTime = Math.floor((now - beginTime) / 1000);
        $( '.records' ).append( eventName + ': ' + eventTime + '<br>' );
        var eventData = {
          "id": buttonId,
          "name": eventName,
          "time": eventTime
        }
        $scope.sessionData.behaviorInstances.push(eventData);
      console.log(eventData);
    }
  };

  vm.saveSession = function() {
    var info = $scope.sessionData;
    timeFactory.saveSessionData(info, function(data) {
    });
    //$location.path('/viewdatasets');
  };

 });
}());
