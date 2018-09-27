var config=require('./config.json');
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

declare function test(callback): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testAngularFirebase';
  @ViewChild('fileInput') fileInput: ElementRef;
  selectedPicture: String;
  index: number = 0;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.selectedPicture = config.pictures[this.index].path;
  }

  nextPicture() {

    const url = 'http://localhost:4201/notifications/push';
    const body = {
      payload: {
        topic: 'demotopic',
        title: 'test',
        body: 'test'
      }
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(url, body, {
      headers: headers
    }).subscribe(
      (data) => {
        try {//TODO: This can change as the transition takes some time cause of the notification delay
          this.selectedPicture = config.pictures[++this.index].path;
        } catch (err) {
          this.index = 0;
          this.selectedPicture = config.pictures[this.index].path;
        }
        console.log(this.selectedPicture);
      }
    )
  }
}
