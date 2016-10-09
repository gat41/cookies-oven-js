var i;

function clearFinalCookies(){
    startTray = document.getElementById('tray');
    finalTray = document.getElementById('final-tray-img');
    // remove the last child in the div until there is no child element in it
    while(finalTray.childElementCount != 0) {
        startTray.removeChild(startTray.lastChild);
        finalTray.removeChild(finalTray.lastChild);
    }

    // remove restart button
    restartBtn = document.getElementById('restart');
    document.body.removeChild(restartBtn);

    // clear statement
  	p = document.getElementById('final-statement');
  	p.innerHTML = '';

    // clear tray
  	finalTrayContainer = document.getElementById('final-tray');
  	finalTrayContainer.removeChild(finalTray);

    // clear cookie count
	  cookie_count = 0;

    // reset text
  	pStart = document.getElementById('counter');
  	pStart.innerHTML = 'You have placed ' + cookie_count + ' cookie dough onto the tray.';

    // enable stop button
  	document.getElementById('stop-btn').disabled = false;

}

function showFinalTray() {

   // from timer.js
	 clearInterval(counter);

	 p = document.getElementById("timer");
	  // currentTime -= 1;
	 if (currentTime < 10) {
	   p.innerHTML= '00:00:0' + currentTime;
	 }
	 else {
	   p.innerHTML= '00:00:' + currentTime;
	 }

   // disable stop button
	 document.getElementById('stop-btn').disabled = true;

	 finalTrayContainer = document.getElementById('final-tray');

	 finalTray = document.createElement('div');
	 finalTray.setAttribute('id', 'final-tray-img');
	 console.log(finalTray);
	 finalTrayContainer.appendChild(finalTray);

   p = document.getElementById('final-statement');

  if (currentTime < 15) {
			for (i = 0; i < cookie_count; i++) {
				cookieImg = document.createElement('img');
        cookieImg.setAttribute('src', 'img/cookie.jpg');
        size = '30px';
        cookieImg.style.width = size;
        cookieImg.style.height = size;
        cookieImg.style.margin = '3px';

			  finalTray.appendChild(cookieImg);
			}

			p.innerHTML = "Yum yum!"
		}
	else {
		burntImg = document.createElement('img');
		burntImg.setAttribute('src', 'img/burnt.jpg');
		burntImg.style.width = '40px';
	  burntImg.style.height = '60px';
		finalTray.appendChild(burntImg);

		p.innerHTML = "Awww, the cookies are burnt. Try again!"

	}

	// create restart button to clear the tray..
	restartBtn = document.createElement('a');
  restartBtn.setAttribute('id', 'restart');
  restartBtn.setAttribute('class', 'link');
  restartBtn.innerHTML = 'Restart';
  document.body.insertBefore(restartBtn, p.nextSibling);
  setTimeout(function(){
    restartBtn.className += ' show';
  }, 10);
  // setTimeout(func, how long before execute function)
  // try changing the numerical value of the setTimeout to see how it affects the program
  restartBtn.addEventListener('click', clearFinalCookies);
}

function showFunc() {
  stopBtn = document.getElementById('stop-btn');
  stopBtn.addEventListener("click", showFinalTray);
}

document.addEventListener('DOMContentLoaded', showFunc);
