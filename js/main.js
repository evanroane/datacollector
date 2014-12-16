var TimeCtrl = (function() {

  var beginTime,
      endTime,
      timer;
  var timerRunning = !true;

  $ui = {
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
    console.log(formatAsTimer);
  }

  function startTimer() {
      beginTime = new Date();
      timer = setInterval(function() {displayTimer() }, 1000);
      timerRunning = true;
      var startFullDate = moment(beginTime).format('MMMM Do YYYY, h:mm:ss a');
      $( '.records' ).append('Started: ' + startFullDate + "<br>" );
      return timerRunning;
  }

  function stopTimer() {
      endTime = new Date();
      timerRunning = false;
      var endFullDate = moment(endTime).format('MMMM Do YYYY, h:mm:ss a');
      $( '.records' ).append( 'Ended: ' + endFullDate + '<br>' );
      clearInterval(timer);
      console.log('The Timer Has Been Stopped');
      return timerRunning;
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

  return {
    startTimer: startTimer,
    stopTimer: stopTimer,
    dataEvent: dataEvent,
    startControl: $ui.startControl,
    stopControl: $ui.stopControl
  };
})();

TimeCtrl.startControl.addEventListener('click', TimeCtrl.startTimer, false);
TimeCtrl.stopControl.addEventListener('click', TimeCtrl.stopTimer, false);

$( '#arms' ).click(function() {
  TimeCtrl.dataEvent();
});

// Object with User Settings:
// possible url: https://datacollector.firebaseio.com/users/USERNAME/usersettings/
// var conference = {
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
