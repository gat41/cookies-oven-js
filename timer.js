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
  cookieStatus = document.getElementById('cookie-status');
  if (currentTime < 5) {
 	  cookieStatus.innerHTML = 'Status: Doughy..';
  }
  else if (currentTime < 10) {
	  cookieStatus.innerHTML = 'Status: Almost ready..';
  }
  else if (currentTime < 15) {
 	  cookieStatus.innerHTML = 'Status: Ready!';
  }
  else {
    cookieStatus.innerHTML = 'Status: Burnt!!!!';
    document.body.insertBefore(createAlertNotice(), p.nextSibling)
  }
}

function createAlertNotice(){
  alertNotice = document.createElement('a');
  alertNotice.setAttribute('id', 'alert');
  alertNotice.setAttribute('class', 'link');
  alertNotice.innerHTML = 'The cookies are done! Press stop to take them out of the oven.';

  return alertNotice;
}


function outputTime(currentTime) {
  // declaration
  var hours, minutes, seconds;

  if (currentTime/60/60 < 1) {
    hours = '00';
  }
  else {
    time = currentTime/60/60;
    hours = time < 10 ? '0' + time : time;
  }

  if (currentTime/60 < 1) {
    minutes = '00';
  }
  else {
    time = currentTime/60;
    minutes = time < 10 ? '0' + time : time;
  }

  seconds = currentTime % 60
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return hours + ':' + minutes + ':' + seconds;
}

function addTime() {
  p = document.getElementById("timer");
  // ES6 supports string interpolation (http://es6-features.org/)
  p.innerHTML = outputTime(currentTime)
  changeStatusText(currentTime);
  currentTime += 1;
}

function getCurrentTime() {
  return currentTime;
}

function startTimer() {
  ovenNotice = document.getElementById('oven-notice');
  // dont run the timer if there is already one timer running!
  if (cookieCount > 0){
    ovenNotice.innerHTML = '';
    if (!timerRunning) {
      addTime();
      timer = setInterval(function(){ addTime() }, 1000); // 1000 milliseconds
      timerRunning = true;
    }
  }
  else {
    ovenNotice.innerHTML = 'You have not added any cookies yet!';
  }
}

function endTimer() {
  clearInterval(timer);
  timerRunning = false;
}

// move to oven/script.js
function initTimerFunc() {
    startBtn = document.getElementById('start-btn');
    startBtn.addEventListener("click", startTimer);
}
document.addEventListener('DOMContentLoaded', initTimerFunc);
