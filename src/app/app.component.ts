var config = require('./config.json'); //TODO: Take from @Jasmine the real photos
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  fade
} from './animation';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';
import {
  Subscription
} from 'rxjs';
import {
  HostListener
} from '@angular/core';

declare function test(callback): any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: fade
})
export class AppComponent implements OnInit {
  private device: string;
  private key;
  private sub: Subscription;

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    if (event.key === 'ArrowLeft') this.nextPicture();
    else if (event.key === 'ArrowRight') this.prevPicture();
  }
  devices = ['fridge', 'wall', 'counter'];

  state = 'in';
  enableAnimation = false;
  title = 'testAngularFirebase';
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput2') fileInput2: ElementRef;
  selectedPicture: String;
  index: number = 0;
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params: Params) => {

      if (!this.devices.includes(params['id'])) {
        this.device = 'unknown'
      } else this.device = params['id'];

      this.selectedPicture = config[this.device][this.index].path;
    });
  }

  nextPicture() {
    try {
      this.selectedPicture = config[this.device][++this.index].path;
    } catch (err) {
      this.index = 0;
      this.selectedPicture = config[this.device][this.index].path;
    }
  }

  prevPicture() {
    try {
      this.selectedPicture = config[this.device][--this.index].path;
    } catch (err) {
      this.index = config[this.device].length - 1;
      this.selectedPicture = config[this.device][this.index].path;
    }
  }
}
