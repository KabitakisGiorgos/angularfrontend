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
var   fcmToken  = null;
messaging.usePublicVapidKey("BBk0QqcipxfigNlTDt3uxIfQ8dI2u3v8OgM7dpMrjl05j5CyKjwZS1EKho_lXQu1wwTGgI1w9G63azNpYIx8J-g");
// Request permission for push notifications.
messaging.requestPermission()
  .then(() => {
    log('Have permission to send push notifications');
    return messaging.getToken();
  })
  .then(token => {
    fcmToken = token;
    console.log(token);
    log(`Received FCM token: ${token}`);
  })
  .catch(err => {
    log(err);
  });

// Handle incoming messages.
messaging.onMessage(payload => {
  log(`Received push notification: ${JSON.stringify(payload)}`);
  const { body, title } = payload.notification;
  toastr.info(body, title);
});

// Handlers for buttons.
function onOnSiteNotificationClick() {
 
  console.log('here test the multer server');
}

function onOffSiteNotificationClick() {
 
  console.log('here test the multer server');
}

// Simple logging to page element.
const $log = $('#log');
function log(message) {
  $log.append(`<br/>${message}`);
}

  