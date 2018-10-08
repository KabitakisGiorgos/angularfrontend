import {
  Injectable
} from '@angular/core';
import * as firebase from 'firebase';

import {
  catchError
} from 'rxjs/operators';
import {
  BehaviorSubject
} from 'rxjs';

@Injectable()
export class MessagingService {

  messaging = firebase.messaging()
  
  currentMessage = new BehaviorSubject(null)

  constructor() {}



  getPermission() {
    this.messaging.usePublicVapidKey("BBk0QqcipxfigNlTDt3uxIfQ8dI2u3v8OgM7dpMrjl05j5CyKjwZS1EKho_lXQu1wwTGgI1w9G63azNpYIx8J-g");
    this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        return this.messaging.getToken()
      })
      .then(token => {
        console.log(token)
        this.subscribeTokenToTopic(token,'george');
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  receiveMessage(next) {
    this.messaging.onMessage((payload) => {
      next(payload);
    });

  }


   subscribeTokenToTopic(currentToken, topic) {
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
}
