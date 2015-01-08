;(function() {
  'use strict';

  angular.module('batApp')
  .controller('TimeController', function($scope, $routeParams, $location, codeSetFactory, timeFactory) {
  var vm = this;
  var id = $routeParams.id;
  var beginTime,
    endTime,
    timer;
  var timerRunning = !true;

  $scope.behaviorInstances = [];
  $scope.dataEventCounter = 0;
  $scope.sessionLabel = "";
  $scope.sessionDesc = "";

  // $scope.$on('$locationChangeStart', function(event) {
  //   if (timerRunning === true) {
  //     event.preventDefault(); //stay on current page
  //     }
  // });

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

  vm.goBack = function() {
    if (timerRunning === false) {
      $location.path('/newsession');
    } else {
      console.log("not while the timer is running");
    }
  };

  vm.dataEvent = function(eventName, buttonId) {
    if (timerRunning === false) {
      console.log("Not going to happen");
      } else {
        var now = new Date();
        var eventTime = Math.floor((now - beginTime) / 1000);
        var dataEventCounter = $scope.dataEventCounter;
        var eventData = {
          "x": dataEventCounter + 1,
          "name": eventName,
          "time": eventTime
        }
        $scope.behaviorInstances.push(eventData);
        $scope.dataEventCounter++;
        console.log(eventData);
    }
  };

  vm.saveSession = function(codeSetId, desc) {
    if (timerRunning === false) {
      var behaviorInstances = $scope.behaviorInstances;
      var name = $scope.sessionLabel;
      var desc = $scope.sessionDesc;
      var sessionRecord = {
        "startDate": beginTime,
        "endDate": endTime,
        "name": name,
        "description": desc,
        "codeSetName": codeSetId,
        "behaviorInstances": behaviorInstances
      };
      timeFactory.saveSessionData(sessionRecord, function(data) {
        $location.path('/previoussessiondata');
      });

    } else {
      console.log("only when the timer is not running")
    }
  };

 });
}());
