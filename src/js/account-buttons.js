// Account button login/logout
const accountButtons = document.querySelectorAll('.account-button');

async function toggleText(el, auth) {
  let state = await auth;
  if (state === 'true') {
    console.log(`user authenticated! changing button text`);
    el.innerText = el.getAttribute('data-logout-text');
    el.href = el.getAttribute('data-logout-url');
    el.ariaLabel = el.getAttribute('data-logout-text');
  }
}

export function checkAccountButtons(auth) {
  accountButtons.forEach((el) => {
    toggleText(el, auth);
  });
}

export default checkAccountButtons;