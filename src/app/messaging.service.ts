import {
  Injectable
} from '@angular/core';
// import * as firebase from 'firebase';
import {
  AngularFireMessaging
} from '@angular/fire/messaging';


import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class MessagingService {

  // messaging = firebase.messaging()
  currentMessage = new BehaviorSubject(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        _messaging.usePublicVapidKey('BBk0QqcipxfigNlTDt3uxIfQ8dI2u3v8OgM7dpMrjl05j5CyKjwZS1EKho_lXQu1wwTGgI1w9G63azNpYIx8J-g');
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  getPermission() {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
        // this.updateToken(userId, token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }
}
