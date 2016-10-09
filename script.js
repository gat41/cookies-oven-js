var cookie_count = 0;

function createCookieImg(){
  cookieImg = document.createElement('img');
  cookieImg.setAttribute('src', 'img/cookie-dough.jpg');
  size = '30px';
  cookieImg.style.width = size;
  cookieImg.style.height = size;
  cookieImg.style.margin = '3px';

  return cookieImg;
}

function clearCookies(){
  startTray = document.getElementById('tray');
  // remove the last child in the div until there is no child element in it
  while(startTray.childElementCount != 0) {
      startTray.removeChild(startTray.lastChild);
  }

  restartBtn = document.getElementById('restart');
  document.body.removeChild(restartBtn);
  cookie_count = 0;
  p.innerHTML = 'You have placed ' + cookie_count + ' cookie dough onto the tray.';
}

function createRestartBtn(){
  restartBtn = document.createElement('a');
  restartBtn.setAttribute('id', 'restart');
  restartBtn.setAttribute('class', 'link');
  restartBtn.innerHTML = 'Restart';

  return restartBtn;
}

function addCookie(){
    // find counter <p> tag
    p = document.getElementById('counter');

    // check how many cookies added
    if(cookie_count >= 10) {
       	p.innerHTML = 'Oops, your tray can\'t take too many cookies. Restart or start the oven! :)';

        // if restart button not found
        if(!document.getElementById('restart')){
            restartBtn = createRestartBtn();
            document.body.insertBefore(restartBtn, p.nextSibling);
            setTimeout(function(){
                restartBtn.className += ' show';
            }, 10);
            // setTimeout(func, how long before execute function)
           // try changing the numerical value of the setTimeout to see how it affects the program
            restartBtn.addEventListener('click', clearCookies);
        }
    }
    else {
        cookieImg = createCookieImg();
        div = document.getElementById('tray');
        div.appendChild(cookieImg);

        cookie_count += 1;

        p.innerHTML = 'You have placed ' + cookie_count + ' cookie dough onto the tray.';
    }
}

function addFunc(){
    cookie = document.getElementById('add-cookie');
    cookie.addEventListener("click", addCookie);
}
document.addEventListener('DOMContentLoaded', addFunc);
