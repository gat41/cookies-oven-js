//https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
//http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer

var counter;
var currentTime = 0;
var endTimeAfter = 10;
var endTime = endTimeAfter; //seconds
var timerRunning = false;

// move to oven/script.js
function changeStatusText(currentTime) {
  p = document.getElementById('cookie-status');

  if ( currentTime < 5 ) {
 	  p.innerHTML = 'doughy..';
  }
  else if ( currentTime < 10 ) {
    p.innerHTML = '';
	  p.innerHTML = 'Almost ready..';
  }
  else if ( currentTime < 15 ) {
    p.innerHTML = '';
 	  p.innerHTML = 'ready!';
  }
  else {
    p.innerHTML = '';
    p.innerHTML = 'Cookies are burnt!';
  }
}

function createAlertNotice(){
  alertNotice = document.createElement('a');
  alertNotice.setAttribute('id', 'alert');
  alertNotice.setAttribute('class', 'link');
  alertNotice.innerHTML = 'The cookies are done! Press stop to take them out of the oven.';

  return alertNotice;
}


function outputTime() {
  p = document.getElementById("timer");

  // ES6 supports string interpolation
  p.innerHTML = currentTime < 10 ? '00:00:0' + currentTime : '00:00:' + currentTime;

  changeStatusText(currentTime);

  if (currentTime === endTime) {
     alertNotice = createAlertNotice();
     p = document.getElementById('cookie-status');
     document.body.insertBefore(alertNotice, p.nextSibling);
                 setTimeout(function(){
                                 alertNotice.className += ' show';
                             }, 10);
      endTime = endTimeAfter; //to reset timer
   //  return;
  }

  currentTime += 1;

}

function startTimer() {
  // dont run the timer if there is already one timer running!
  if(!timerRunning){
    counter = setInterval(function(){ outputTime() }, 1000); // 1000 milliseconds
    timerRunning = true;
  }
}

function endTimer() {
  alertNotice = document.getElementById('alert');
  document.body.removeChild(alertNotice);
  timerRunning = false;
}

// move to oven/script.js
function initTimerFunc() {
    startBtn = document.getElementById('start-btn');
    startBtn.addEventListener("click", startTimer);
}
document.addEventListener('DOMContentLoaded', initTimerFunc);
