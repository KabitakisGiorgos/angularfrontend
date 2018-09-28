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

declare function test(callback): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testAngularFirebase';
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('fileInput2') fileInput2: ElementRef;
  selectedPicture: String;
  index: number = 0;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    test((test) => {
      if(test.body==='next') this.fileInput2.nativeElement.click();
      else if(test.body==='prev') this.fileInput.nativeElement.click();
      console.log(test);
    });
    this.selectedPicture = config.pictures[this.index].path;
  }

  nextPicture() {
    try {
      this.selectedPicture = config.pictures[++this.index].path;
    } catch (err) {
      this.index = 0;
      this.selectedPicture = config.pictures[this.index].path;
    }
    console.log('next');
  }

  prevPicture() {
    try {
      this.selectedPicture = config.pictures[--this.index].path;
    } catch (err) {
      this.index = config.pictures.length-1;
      this.selectedPicture = config.pictures[this.index].path;
    }
    console.log('prev');
  }



  // onUpload() {
  //   const fd=new FormData();
  //   fd.append('file-to-upload',this.selectedfile,this.selectedfile.name);
  //   this.http.post('http://localhost:4201/test',fd, {responseType: 'text'}).subscribe(
  //     (res)=>{
  //       console.log(res);
  //       this.uploaded=true;
  //     }
  //   )
  // }

}
