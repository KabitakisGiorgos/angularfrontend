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
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  receiveMessage() {
    this.messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      this.currentMessage.next(payload)
    });

  }
}
