const allowedOrigins = [
  'https://learn.gym.soy',
  'http://learn.gym.soy',
  'https://gym.soy',
  'http://gym.soy',
  'https://gymnasium.day',
  'http://gymnasium.day',
  'https://dev.gymnasium.day',
  'http://dev.gymnasium.day',
  'https://learn.dev.gymnasium.day',
  'http://learn.dev.gymnasium.day',
];

if (window.top !== window.self) {
  window.addEventListener('message', function(event) {
    if (!allowedOrigins.includes(event.origin)) {
      return;
    }

    console.log(`message received: ${event.data}`,event);
    const message = JSON.stringify({'auth': document.documentElement.getAttribute('data-auth'), 'cookies': document.cookie});

    window.top.postMessage(message,event.origin);
  },false);
}