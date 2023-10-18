const allowedOrigins = [
  'https://learn.gym.soy',
  'http://learn.gym.soy',
  'https://gym.soy',
  'http://gym.soy',
  'http://localhost',
  'http://localhost:3030',
];

const domain = window.location.origin;
const childFrame = document.getElementById('iframe');

const receiveMessage = function(event) {
  // Abort if request doesn't come from a valid origin
  if (!allowedOrigins.includes(event.origin)) return;

  // Log the message contents to the console
  const response = JSON.parse(event.data);

  window.auth = response.auth === undefined ? 'false' : response.auth;
  window.cookies = response.cookies === undefined ? 'false' : response.cookies;
  console.log(response);
};

window.addEventListener('message', receiveMessage, false);

function checkAuth() {
  if (!!childFrame) {
    try {
      console.log(`${domain} sending message`);
      childFrame.contentWindow.postMessage(null, 'https://learn.gym.soy');
    } catch (err) {
      console.warn(err);
    }
  }
}

setTimeout(checkAuth,1000);