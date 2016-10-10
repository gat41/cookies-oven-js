function resetCookieAndOven(){
    // remove the last child in the div until there is no child element in it
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
	  cookie_count = 0;

    // reset text
  	pStart = document.getElementById('counter');
  	pStart.innerHTML = 'You have placed ' + cookie_count + ' cookie dough onto the tray.';

    // enable stop button
  	document.getElementById('stop-btn').disabled = false;

}

function createOvenRestartBtn() {
  // create restart button to clear the tray..
	restartBtn = document.createElement('a');
  restartBtn.setAttribute('id', 'restart');
  restartBtn.setAttribute('class', 'link');
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
  // from timer.js
	endTimer();

  // disable stop button
  document.getElementById('stop-btn').disabled = true;

  // create final tray
  finalTray = createTray();
	finalTrayContainer = document.getElementById('final-tray-container');
  finalStatement = document.getElementById('final-statement');

  if (currentTime < 15) {
    for (var i = 0; i < cookie_count; i++) {
      finalTray.appendChild(createBakedCookieImg());
    }
		finalStatement.innerHTML = "Yum yum!"
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

  // setTimeout(func, how long before execute function)
  // try changing the numerical value of the setTimeout to see how it affects the program
  setTimeout(function(){
    restartBtn.className += ' show';
  }, 10);
  restartBtn.addEventListener('click', resetCookieAndOven);
}

function showFunc() {
  stopBtn = document.getElementById('stop-btn');
  stopBtn.addEventListener("click", showFinalTray);
}

document.addEventListener('DOMContentLoaded', showFunc);
