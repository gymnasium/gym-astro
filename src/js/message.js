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

const receiveMessage = async function(event) {
  // Abort if request doesn't come from a valid origin
  if (!allowedOrigins.includes(event.origin)) return;

  // Log the message contents to the console
  const response = await JSON.parse(event.data);

  window.auth = await response.auth === undefined ? 'false' : response.auth;
  window.cookies = await response.cookies === undefined ? 'false' : response.cookies;
  console.log(await response);
};

window.addEventListener('message', receiveMessage, false);

async function checkAuth() {
  if (!!childFrame) {
    try {
      console.log(`${domain} sending message`);
      await childFrame.contentWindow.postMessage(null, 'https://learn.gym.soy');
    } catch (err) {
      console.warn(err);
    }
  }
}

setTimeout(checkAuth,500);