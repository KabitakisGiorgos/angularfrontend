import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private afMessaging: AngularFireMessaging) { }
  requestPermission() {
    this.afMessaging.requestPermission
      .subscribe(
        () => { console.log('Permission granted!'); },
        (error) => { console.error(error); },  
      );
  }
}

