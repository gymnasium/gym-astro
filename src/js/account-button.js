// Account button login/logout
window.auth = 'true'
let intervalId;
const accountButton = document.querySelectorAll('.account-button');

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
  let auth = await window.auth;
  if (auth === 'true') {
    stopInterval();
    accountButtons(accountButton, window.auth);
  } else {
    console.warn('window.auth is still false')
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