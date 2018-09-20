import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  MessagingService
} from './messaging.service'
import {
  AppComponent
} from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';

import * as firebase from 'firebase';
export const firebaseConfig = {
  apiKey: "AIzaSyDHOjICGxR4tS6RumDECYR9GNA1ngOcAFU",
  authDomain: "seismic-glow-212911.firebaseapp.com",
  databaseURL: "https://seismic-glow-212911.firebaseio.com",
  projectId: "seismic-glow-212911",
  storageBucket: "seismic-glow-212911.appspot.com",
  messagingSenderId: "868178536460",
};
import { AsyncPipe } from '../../node_modules/@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [MessagingService,AsyncPipe ],
  bootstrap: [AppComponent]
})
export class AppModule {}
