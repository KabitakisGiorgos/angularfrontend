importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDHOjICGxR4tS6RumDECYR9GNA1ngOcAFU",
    authDomain: "seismic-glow-212911.firebaseapp.com",
    databaseURL: "https://seismic-glow-212911.firebaseio.com",
    projectId: "seismic-glow-212911",
    storageBucket: "seismic-glow-212911.appspot.com",
    messagingSenderId: "868178536460"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  console.log('[worker] Received push notification: ', payload);
  return self.registration.showNotification(payload.title, payload);
});
