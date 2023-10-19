// Account button login/logout
let intervalId;
const accountButton = document.querySelectorAll('.account-button');
let counter = 0;

async function toggleText(el, auth) {
  let state = await auth;
  if (state === 'true') {
    console.log(`user authenticated! changing button text`);
    el.innerText = el.getAttribute('data-logout-text');
    el.href = el.getAttribute('data-logout-url');
    el.ariaLabel = el.getAttribute('data-logout-text');
  }
}

function accountButtons(els, auth) {
  els.forEach((el) => {
    toggleText(el,auth);
  });
}

const asyncAuth = async () => {
  counter ++;
  if (counter === 10){
    stopInterval();
    console.warn(`failed to get authentication after ${counter} tries!`);
  }
  let auth = await window.auth;
  if (auth === 'true') {
    stopInterval();
    accountButtons(accountButton, window.auth);
  }
}

function startInterval() {
  if (!intervalId) {
    intervalId = setInterval(asyncAuth, 1000);
  }
}

function stopInterval() {
  clearInterval(intervalId);
  // release our intervalID from the variable
  intervalId = null;
}

startInterval();