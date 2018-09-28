
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
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

declare function test(callback): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: fade
})
export class AppComponent implements OnInit {
  private var1: string;
  private sub: Subscription;

  state = 'in';
  enableAnimation = false;
  title = 'testAngularFirebase';
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput2') fileInput2: ElementRef;
  selectedPicture: String;
  index: number = 0;
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    test((test) => {
      if (test.body === 'next') this.fileInput2.nativeElement.click();
      else if (test.body === 'prev') this.fileInput.nativeElement.click();
      console.log(test);
    });
    this.selectedPicture = config.pictures[this.index].path;
    this.sub = this.route.params.subscribe((params: Params) => {
      this.var1 = params['id'];
      console.log(this.var1);
    });
  }

  nextPicture() {
    this.enableAnimation = true;
    this.toggleState();
    setTimeout(() => {
      try {
        this.selectedPicture = config.pictures[++this.index].path;
      } catch (err) {
        this.index = 0;
        this.selectedPicture = config.pictures[this.index].path;
      }
      this.toggleState();
      console.log('next');
    }, 1000);
  }

  prevPicture() {
    this.enableAnimation = true;
    this.toggleState();
    setTimeout(() => {
      try {
        this.selectedPicture = config.pictures[--this.index].path;
      } catch (err) {
        this.index = config.pictures.length - 1;
        this.selectedPicture = config.pictures[this.index].path;
      }
      this.toggleState();
      console.log('prev');
    }, 1000)
  }

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }
}
