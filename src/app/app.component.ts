
var config = require('./config.json');
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { fade } from './animation';

declare function test(callback): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: fade
})
export class AppComponent implements OnInit {

  state = 'in';
  enableAnimation = false;
  title = 'testAngularFirebase';
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput2') fileInput2: ElementRef;
  selectedPicture: String;
  index: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    test((test) => {
      if (test.body === 'next') this.fileInput2.nativeElement.click();
      else if (test.body === 'prev') this.fileInput.nativeElement.click();
      console.log(test);
    });
    this.selectedPicture = config.pictures[this.index].path;
  }

  nextPicture() {
    this.enableAnimation = true;
    this.toggleState();
    setTimeout(()=>{
      try {
        this.selectedPicture = config.pictures[++this.index].path;
      } catch (err) {
        this.index = 0;
        this.selectedPicture = config.pictures[this.index].path;
      }
      this.toggleState();
    },1000);
  }

  prevPicture() {
    this.enableAnimation = true;
    this.toggleState();
    setTimeout(()=>{
      try {
        this.selectedPicture = config.pictures[--this.index].path;
      } catch (err) {
        this.index = config.pictures.length - 1;
        this.selectedPicture = config.pictures[this.index].path;
      }
      this.toggleState();
      console.log('prev');
    },1000) 
  }

  onClick($event) {
    
    setTimeout(() => {
      // if($event.currentTarget.innerHTML==='Next') this.nextPicture();
      // else if($event.currentTarget.innerHTML==='Previous')
      this.prevPicture();
      console.log($event);
    }, 1000)

  }

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }
}
