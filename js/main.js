var beginTime;
var endTime;

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
    .format('H:mm:ss');
    document.getElementById('time-container').innerHTML = formatAsTimer;
    console.log(formatAsTimer);
  }

  function startTimer() {
    beginTime = new Date();
    var startFullDate = moment(beginTime).format('MMMM Do YYYY, h:mm:ss a');
    $( '.records' ).append('Started: ' + startFullDate + "<br>" );
    return displayTimer;
  }

  function stopTimer() {
    endTime = new Date();
    var endFullDate = moment(endTime).format('MMMM Do YYYY, h:mm:ss a');
    $( '.records' ).append( 'Ended: ' + endFullDate + '<br>' );
    clearInterval(timer);
    console.log('The Timer Has Been Stopped')
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
  var now = new Date();
  var eventTime = Math.floor((now - beginTime) / 1000);
  $( '.records' ).append('Folded arms: ' + eventTime + "<br>" );
  console.log(eventTime);
});
