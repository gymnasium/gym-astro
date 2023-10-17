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
  const auth = response.auth;
  console.log(response);
};

window.addEventListener('message', receiveMessage, false);

function checkAuth(){
  console.log(`${domain} sending message`);
  if (!!childFrame) {
    childFrame.contentWindow.postMessage('', 'http://learn.gym.soy');
  }
}

setTimeout(checkAuth,1000);