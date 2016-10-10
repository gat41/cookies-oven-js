//https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/
//http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer

// tell them its not be a good practice to declare variable
// on a global scope like this but in this case for the sake of simplicity
var timer;
var currentTime = 0;
var timeDone = 15;
var timerRunning = false;

function changeStatusText(currentTime) {
  cookieStatus = document.getElementById('cookie-status');
  if (currentTime < timeDone * 0.5) { // approximately 7 seconds
 	  cookieStatus.innerHTML = 'Status: Doughy..';
  }
  else if (currentTime < timeDone * 0.75) {
	  cookieStatus.innerHTML = 'Status: Almost ready..';
  }
  else if (currentTime <= timeDone * 1.25) {
 	  cookieStatus.innerHTML = 'Status: Ready!';
    if(!document.getElementById('alert')){
      document.body.insertBefore(createAlertNotice('done'), cookieStatus.nextSibling)
    }
  }
  else {
    cookieStatus.innerHTML = 'Status: Burnt!!!!';
    oven = document.getElementById('oven');
    oven.style.backgroundImage = "url('img/fire.jpg')";
    oven.style.backgroundSize = 'contain';
    document.getElementById('timer').style.color = 'white';
    document.getElementById('alert').innerHTML = 'THE COOKIES ARE BURNT!!!'
  }
}

function createAlertNotice(){
  alertNotice = document.createElement('p');
  alertNotice.setAttribute('id', 'alert');
  // alertNotice.setAttribute('class', 'link');
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
    time = parseInt(currentTime / 60 / 60);
    hours = time < 10 ? '0' + time : time;
  }

  if (currentTime/60 < 1) {
    minutes = '00';
  }
  else {
    time = parseInt(currentTime / 60);
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
      timer = setInterval(function(){ addTime() }, 100); // 1000 milliseconds
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
