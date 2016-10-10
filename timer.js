//https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
//http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer

// tell them its not be a good practice to declare variable
// on a global scope like this but in this case for the sake of simplicity
var timer;
var currentTime = 0;
var endTimeAfter = 10;
var endTime = endTimeAfter; //seconds
var timerRunning = false;

function changeStatusText(currentTime) {
  p = document.getElementById('cookie-status');

  if (currentTime < 5) {
 	  p.innerHTML = 'Status: Doughy..';
  }
  else if (currentTime < 10) {
	  p.innerHTML = 'Status: Almost ready..';
  }
  else if (currentTime < 15) {
 	  p.innerHTML = 'Status: Ready!';
  }
  else {
    p.innerHTML = 'Status: Burnt!!!!';
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
  p.innerHTML = currentTime < 10 ? '00:00:0' + currentTime : '00:00:' + currentTime;
  changeStatusText(currentTime);

  // should move into a func in oven/script.js
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

function addTime() {
  p = document.getElementById("timer");
  // ES6 supports string interpolation (http://es6-features.org/)
  p.innerHTML = currentTime < 10 ? '00:00:0' + currentTime : '00:00:' + currentTime;
  changeStatusText(currentTime);
  currentTime += 1;
}

function getCurrentTime() {
  return currentTime;
}

function startTimer() {
  // dont run the timer if there is already one timer running!
  if(!timerRunning){
    timer = setInterval(function(){ addTime() }, 1000); // 1000 milliseconds
    timerRunning = true;
  }
}

function endTimer() {
  clearInterval(timer);
}

// move to oven/script.js
function initTimerFunc() {
    startBtn = document.getElementById('start-btn');
    startBtn.addEventListener("click", startTimer);
}
document.addEventListener('DOMContentLoaded', initTimerFunc);
