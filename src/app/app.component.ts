import {
  Component,
  OnInit
} from '@angular/core';

declare function test(callback): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testAngularFirebase';
  constructor() {}

  ngOnInit() {
    test((test) => {
      alert(test.body+' '+test.title);
      console.log(test);
    });
  }
}
