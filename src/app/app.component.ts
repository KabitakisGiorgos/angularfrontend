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
import serverconfig from '../environments/environment';

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
    console.log('next')

    const url = 'http://'+serverconfig.serverport+':'+serverconfig.port+'/notifications/push';
    const body = {
      payload: {
        topic: 'demotopic',
        title: 'test',
        body: 'next'
      }
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(url, body, {
      headers: headers
    }).subscribe(
      (data) => {
        try {
          this.selectedPicture = config.pictures[++this.index].path;
        } catch (err) {
          this.index = 0;
          this.selectedPicture = config.pictures[this.index].path;
        }
      }
    )
  }

  prevPicture() {
    console.log('prev')
    const url = 'http://'+serverconfig.serverport+':'+serverconfig.port+'/notifications/push';
    const body = {
      payload: {
        topic: 'demotopic',
        title: 'test',
        body: 'prev'
      }
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(url, body, {
      headers: headers
    }).subscribe(
      (data) => {
        try {
          this.selectedPicture = config.pictures[--this.index].path;
        } catch (err) {
          this.index = 0;
          this.selectedPicture = config.pictures[this.index].path;
        }
      }
    )
  }
}
