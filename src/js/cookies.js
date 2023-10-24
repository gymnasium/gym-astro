export function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

// Read either document cookie or a string of cookie data
export function readCookie(name, string) {
  var nameEQ = name + "=";
  var ca;
  if (string) {
    ca = string.split(';');
  } else {
    ca = document.cookie.split(';');
  }
  
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

export function eraseCookie(name) {
  createCookie(name,"",-1);
}

export default { readCookie, createCookie, eraseCookie }