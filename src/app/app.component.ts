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

var config = { //TODO: FIX this seperately
  "pictures": [{
      "path": "../assets/counter_1.png"
    },
    {
      "path": "../assets/test.png"
    },
    {
      "path": "../assets/test1.png"
    },
    {
      "path": "../assets/test2.png"
    },
    {
      "path": "../assets/test3.png"
    },
    {
      "path": "../assets/test4.png"
    },
    {
      "path": "../assets/tes5.png"
    }
  ]
}


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
    test((test) => {
      this.fileInput.nativeElement.click();
      console.log(test);
    });
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
        try {
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
