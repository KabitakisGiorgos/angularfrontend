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
import * as firebase from 'firebase';
export const firebaseConfig = {
  apiKey: "AIzaSyDHOjICGxR4tS6RumDECYR9GNA1ngOcAFU",
  authDomain: "seismic-glow-212911.firebaseapp.com",
  databaseURL: "https://seismic-glow-212911.firebaseio.com",
  projectId: "seismic-glow-212911",
  storageBucket: "seismic-glow-212911.appspot.com",
  messagingSenderId: "868178536460"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule {}
