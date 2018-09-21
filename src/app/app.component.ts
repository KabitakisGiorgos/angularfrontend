import {
  Component,
  OnInit
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare function test(callback): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testAngularFirebase';

  selectedfile:File=null;
  uploaded:boolean = false;
  
  constructor(private http:HttpClient) {}

  ngOnInit() {
    test((test) => {
      alert(test.body+' '+test.title);
      console.log(test);
    });
  }

  appear(){
    this.uploaded=!this.uploaded;
  }

  onFileSelected(event){
    this.selectedfile =<File> event.target.files[0];
  }
 
  onUpload() {
    const fd=new FormData();
    fd.append('file-to-upload',this.selectedfile,this.selectedfile.name);
    this.http.post('http://localhost:4201/test',fd, {responseType: 'text'}).subscribe(
      (res)=>{
        console.log(res);
        this.uploaded=true;
      }
    )
  }

}
