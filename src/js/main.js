import { readCookie, createCookie, eraseCookie } from './cookies.js'

import { checkAccountButtons } from './account-buttons.js'

// are we logged in?
let auth = readCookie('edxloggedin');

if (typeof auth === 'undefined' || auth === null) {
  auth = false;
}

// do we have a user cookie?
let userinfo = readCookie('edx-user-info');

if (typeof userinfo !== 'undefined' && userinfo !== null) {
  // clean up octal mess from edx-user-info
  userinfo = userinfo.replaceAll("\\054", ',').replaceAll("\\\"", '"').replaceAll(" ",'')

  // strip wrapping quotes
  if (userinfo.at(0) === '"' && userinfo.at(-1) === '"') {
    userinfo = userinfo.slice(1, -1);
  }
  userinfo = JSON.parse(userinfo);
}

// wait for astro's view transitions
document.addEventListener('astro:page-load', () => {
  checkAccountButtons(auth);
  console.log(`auth: ${auth}\nuserinfo:$`,userinfo)
});
