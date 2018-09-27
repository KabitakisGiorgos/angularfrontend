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
var fcmToken = null;
messaging.usePublicVapidKey("BBk0QqcipxfigNlTDt3uxIfQ8dI2u3v8OgM7dpMrjl05j5CyKjwZS1EKho_lXQu1wwTGgI1w9G63azNpYIx8J-g");
// Request permission for push notifications.
messaging.requestPermission()
  .then(() => {
    return messaging.getToken();
  })
  .then(token => {
    fcmToken = token;
    console.log(token);
    subscribeTokenToTopic(token,'test');
  })
  .catch(err => {
    console.log(err);
  });

// Handle incoming messages.
function test(next) {
  messaging.onMessage((payload) => {
    const {
      body,
      title
    } = payload.notification;
    next(payload.notification);
  });
}


function subscribeTokenToTopic(currentToken, topic) {
  fetch('https://iid.googleapis.com/iid/v1/' + currentToken + '/rel/topics/' + topic, {
    method: 'POST',
    headers: new Headers({
      'Authorization': 'key=AAAAyiN5KAw:APA91bGtgVEDkNSx9wuz7g-uleq9XiT3eJJwKb5bqKC9-uF-obYi6w0SZdhJkeB4gfxBeEzkiZwJjeppFWJavGdgTywtpRmic9WVrweskprfxztbaM0aOxkK7H-x9Axh0bzRB0h6qpGHii1lSBOP-bKzEd09AmB8Cw'
    })
  }).then(response => {
    if (response.status < 200 || response.status >= 400) {
      throw 'Error subscribing to topic: ' + response.status + ' - ' + response.text();
    }
    console.log('Subscribed to "' + topic + '"');
  }).catch(error => {
    console.error(error);
  })
}