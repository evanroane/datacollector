;(function(){
  'use strict';

  angular.module('batApp')
  .factory('timeFactory', function(){

    var beginTime,
    endTime,
    timer;
    var timerRunning = !true;

    var $ui = {
      display: document.getElementById('time-container'),
      startControl: document.getElementById('start'),
      stopControl: document.getElementById('stop')
    };

    function displayTimer(){
      var secondsSinceBegin = moment.duration(Date.now() - beginTime).asSeconds();
      var formatAsTimer = moment()
      .hour(0)
      .minute(0)
      .second(secondsSinceBegin)
      .format('HH:mm:ss');
      document.getElementById('time-container').innerHTML = formatAsTimer;
      // setTimeout(function() {timerRunning && timer()}, 1000)
      console.log(formatAsTimer);
    }

    function startTimer() {
      if (timerRunning === true) {
        console.log("Timer is already started");
      } else {
        beginTime = new Date();
        timer = setInterval(function() {displayTimer() }, 1000);
        timerRunning = true;
        var startFullDate = moment(beginTime).format('MMMM Do YYYY, h:mm:ss a');
        $( '.records' ).append('Started: ' + startFullDate + "<br>" );
        return timerRunning;
      }
    }

    function stopTimer() {
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
    }

    function dataEvent() {
      if (timerRunning === false) {
        console.log("Not going to happen");
      } else {
        var now = new Date();
        var eventTime = Math.floor((now - beginTime) / 1000);
        $( '.records' ).append( 'Folded arms: ' + eventTime + '<br>' );
        console.log(eventTime);
      }
    }

    function newDataEvent(eventName) {
      if (timerRunning === false) {
        console.log("Not going to happen");
      } else {
        var now = new Date();
        var eventTime = Math.floor((now - beginTime) / 1000);
        $( '.records' ).append( eventName + ': ' + eventTime + '<br>' );
        console.log(eventTime);
      }
    }

    return {
      startTimer: startTimer,
      stopTimer: stopTimer,
      dataEvent: dataEvent,
      newDataEvent: newDataEvent
    };

  })
}());
