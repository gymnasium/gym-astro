// Account button login/logout
const accountButton = document.getElementById('account-button');

async function toggleText(el,auth) {
  let state = await auth;
  if (state === 'true') {
    console.log(`user authenticated! changing button text`);
    el.innerText = el.getAttribute('data-logout-text');
    el.href = el.getAttribute('data-logout-url');
    el.ariaLabel = el.getAttribute('data-logout-text');
  }
}

const asyncAuth = async () => {
  let auth = await window.auth;
  if (auth === 'true') {
    toggleText(accountButton,window.auth);
  } else {
    console.warn('window.auth is still false')
  }
}

await asyncAuth();