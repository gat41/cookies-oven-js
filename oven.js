function resetCookieAndOven(){
  // remove children inside the elements
  startTray = document.getElementById('tray');
  finalTray = document.getElementById('final-tray');
  startTray.innerHTML = '';
  finalTray.innerHTML = '';

  // remove restart button
  restartBtn = document.getElementById('restart');
  document.body.removeChild(restartBtn);

  // clear statement
	p = document.getElementById('final-statement');
	p.innerHTML = '';

  // clear tray
	finalTrayContainer = document.getElementById('final-tray-container');
	finalTrayContainer.removeChild(finalTray);

  // clear cookie count
  cookieCount = 0;

  // remove clear button
  clearBtn = document.getElementById('clear');
  document.body.removeChild(clearBtn);

  // reset text
	pStart = document.getElementById('counter');
	pStart.innerHTML = 'You have placed ' + cookieCount + ' cookie dough onto the tray.';

  // re-enable stop button
	document.getElementById('stop-btn').disabled = false;
  document.getElementById('timer').innerHTML = '';
}

function createOvenRestartBtn() {
  // create restart button to clear the tray..
	restartBtn = document.createElement('button');
  restartBtn.setAttribute('id', 'restart');
  // restartBtn.setAttribute('class', 'link');
  restartBtn.innerHTML = 'Restart';
  return restartBtn;
}

function createBakedCookieImg() {
  cookieImg = document.createElement('img');
  cookieImg.setAttribute('src', 'img/cookie.jpg');
  size = '30px';
  cookieImg.style.width = size;
  cookieImg.style.height = size;
  cookieImg.style.margin = '3px';
  return cookieImg;
}

function createBurntImg() {
  burntImg = document.createElement('img');
  burntImg.setAttribute('src', 'img/burnt.jpg');
  burntImg.style.width = '40px';
  burntImg.style.height = '60px';
  return burntImg;
}

function createTray() {
  finalTray = document.createElement('div');
  finalTray.setAttribute('id', 'final-tray');
  return finalTray;
}

function showFinalTray() {
  if (!timerRunning) {
    finalStatement = document.getElementById('final-statement');
    finalStatement.innerHTML = 'You have not started the timer yet!';
  }
  else {
    // from timer.js
    endTimer();
    // disable stop button
    document.getElementById('stop-btn').disabled = true;

    // create final tray
    finalTray = createTray();
    finalTrayContainer = document.getElementById('final-tray-container');
    finalStatement = document.getElementById('final-statement');

    // filling tray with either cookies or burnt image
    if (currentTime < 15) {
      for (var i = 0; i < cookieCount; i++) {
        finalTray.appendChild(createBakedCookieImg());
      }
      finalStatement.innerHTML = "Here you go!"
    }
    else {
      burntImg = createBurntImg();
      finalTray.appendChild(burntImg);
      finalStatement.innerHTML = "Oh no, the cookies are burnt! Try again!"
    }
    finalTrayContainer.appendChild(finalTray);

    // create restart button
    restartBtn = createOvenRestartBtn();
    document.body.insertBefore(restartBtn, finalStatement.nextSibling);
    
    // try changing the numerical value of the setTimeout to see how it affects the program
    setTimeout(function(){
      restartBtn.className += ' show'; // .show css has animation
    }, 10);
    restartBtn.addEventListener('click', resetCookieAndOven);
  }
}

function showFunc() {
  stopBtn = document.getElementById('stop-btn');
  stopBtn.addEventListener("click", showFinalTray);
}

document.addEventListener('DOMContentLoaded', showFunc);
