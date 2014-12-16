var beginTime;
var endTime;
var timerNotRunning = !false;

var TimeCtrl = (function() {
  $ui = {
    display: document.getElementById('time-container'),
    startControl: document.getElementById('start'),
    stopControl: document.getElementById('stop')
  };

  var timer = setInterval(function() {displayTimer() }, 1000);

  function displayTimer(){
    var secondsSinceBegin = moment.duration(Date.now() - beginTime).asSeconds();
    var formatAsTimer = moment()
    .hour(0)
    .minute(0)
    .second(secondsSinceBegin)
    .format('HH:mm:ss');
    document.getElementById('time-container').innerHTML = formatAsTimer;
    console.log(formatAsTimer);
  }

  function startTimer() {
    beginTime = new Date();
    timerNotRunning = false;
    var startFullDate = moment(beginTime).format('MMMM Do YYYY, h:mm:ss a');
    $( '.records' ).append('Started: ' + startFullDate + "<br>" );
    return timerNotRunning;
  }

  function stopTimer() {
    endTime = new Date();
    timerNotRunning = true;
    var endFullDate = moment(endTime).format('MMMM Do YYYY, h:mm:ss a');
    $( '.records' ).append( 'Ended: ' + endFullDate + '<br>' );
    clearInterval(timer);
    console.log('The Timer Has Been Stopped');
    return timerNotRunning;
  }

  function dataEvent() {

  }

  return {
    startTimer: startTimer,
    stopTimer: stopTimer,
    startControl: $ui.startControl,
    stopControl: $ui.stopControl
  };
})();

TimeCtrl.startControl.addEventListener('click', TimeCtrl.startTimer, false);
TimeCtrl.stopControl.addEventListener('click', TimeCtrl.stopTimer, false);

$( '#arms' ).click(function() {
  if (timerNotRunning === true) {
    console.log("Not going to happen");
  } else {
    var now = new Date();
    var eventTime = Math.floor((now - beginTime) / 1000);
    $( '.records' ).append('Folded arms: ' + eventTime + '<br>' );
    console.log(eventTime);
  }
});

// Object with User Settings:
// possible url: https://datacollector.firebaseio.com/users/USERNAME/
// var userSettings = {
//   "0": {
//     "type": "button",
//     "label" "Fold Arms",
//     "color": "#FF0000"
//   },
//   "1": {
//     "type": "toggle",
//     "label" "On Task",
//     "color": "#00FF00"
//   }
// }
