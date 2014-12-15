var beginTime;


var endTime;

var s = 0;
var m = 0;
var h = 0;

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

  function displayTimer(){
    var secondsSinceBegin = moment.duration(Date.now() - beginTime).asSeconds();
    var formatAsTimer = moment()
    .hour(0)
    .minute(0)
    .second(secondsSinceBegin)
    .format('H:mm:ss');
    document.getElementById('time-container').innerHTML = formatAsTimer;
    console.log(formatAsTimer);
  }

  function startTimer() {
    var now = new Date();


    setInterval(displayTimer, 1000);
  }

  function stopTimer() {
    clearTimeout(timeoutID);
    console.log('The Timer Has Been Stopped')
  }

  return {
    startTimer: startTimer,
    stopClock: stopTimer,
  };
})();

$( '#start' ).click(function() {
  beginTime = new Date();
  TimeCtrl.startTimer();
  startHMS = moment().format('MMMM Do YYYY, h:mm:ss a');
  $( '.records' ).append('Starting Date and Time: ' + startHMS + "<br>" );
    return beginTime;
});

$( '#stop' ).click(function() {
  endTime = new Date();
  timeoutID = clearTimeout(timeoutID);
  TimeCtrl.stopClock();
  var endHMS = moment().format('MMMM Do YYYY, h:mm:ss a');
  $( '.records' ).append( 'End Time' + endHMS + '<br>' );
});

$( '#arms' ).click(function(startHMS) {
  var arms = new Date();
  var x = Math.floor((arms - beginTime) / 1000);
  $( '.records' ).append('Folded arms: ' + x + "<br>" );
  console.log(x);
});
