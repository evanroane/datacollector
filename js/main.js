var startTime;
var startSeconds;
var fullStartDate;
var endTime;

var TimeCtrl = (function () {
  $ui = {
    display: document.getElementById('time-container'),
    startControl: document.getElementById('start'),
    stopControl: document.getElementById('stop')
  };

  function dispZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function noZero(i) {
    if (i === 0) {
      i = 60
    }
    return i;
  }

  function clock() {
    var currentTime = new Date();
    var h = noZero(currentTime.getUTCHours());
    var m = noZero(currentTime.getUTCMinutes());
    var s = noZero(currentTime.getUTCSeconds());
    var hrs = dispZero(h - startTime.getUTCHours());
    var min = dispZero(m - startTime.getUTCMinutes());
    var sec = dispZero(s - startTime.getUTCSeconds());
    var hms = hrs + ":" + min + ":" + sec;

    console.log(currentTime.getUTCSeconds());
    console.log(startTime.getUTCSeconds());
    console.log(currentTime.getUTCSeconds() - startTime.getUTCSeconds());
    console.log(sec);
    document.getElementById('time-container').innerHTML = hms;
    setTimeout('TimeCtrl.clock()', 1000);
  }

  function startTimer() {
    var now = new Date();
    startSeconds = now.getTime();
    fullStartDate = moment.utc(startSeconds)._d;
    clock();
  }

  function stopTimer() {
    console.log('The Timer Has Been Stopped')
  }

  return {
    startClock: startTimer,
    stopClock: stopTimer,
    clock: clock,
  };
})();

// TimeCtrl.$start.addEventListener('click', TimeCtrl.startClock, false);

// TimeCtrl.$stop.addEventListener('click', TimeCtrl.stopClock, false);


$( '#start' ).click(function(){
  startTime = new Date();
  TimeCtrl.startClock();
  startHMS = moment().format('MMMM Do YYYY, h:mm:ss a');
  $( '.records' ).append('Starting Date and Time: ' + startHMS + "<br>" );
  return startTime, startHMS;
});

$( '#stop' ).click(function(){
  endTime = new Date();
  TimeCtrl.stopClock();
  var endHMS = moment().format('MMMM Do YYYY, h:mm:ss a');
  $( '.records' ).append( 'End Time' + endHMS + '<br>' );
});

$( '#arms' ).click(function(startHMS){
  var arms = new Date();
  var x = Math.floor((arms - startTime) / 1000);
  $( '.records' ).append('Folded arms: ' + x + "<br>" );
});
