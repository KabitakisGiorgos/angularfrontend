import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MessagingService } from './messaging.service';
import * as firebase from 'firebase';

export const firebaseConfig = {
apiKey: "AIzaSyDHOjICGxR4tS6RumDECYR9GNA1ngOcAFU",
messagingSenderId: "868178536460"
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
