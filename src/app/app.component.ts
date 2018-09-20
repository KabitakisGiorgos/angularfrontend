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
  uploaded:boolean = false;
  constructor(private http:HttpClient) {}

  ngOnInit() {
    test((test) => {
      alert(test.body+' '+test.title);
      console.log(test);
    });
  }

  appear(){

  }

  // constructor(private serversService: ServersService,
  //   private router: Router,
  //   private route: ActivatedRoute,private http:HttpClient) {}

  // ngOnInit() {
  //   this.servers = this.serversService.getServers();
  // }
  // selectedFile:File = null;
  // uploaded:boolean=false;
 
  // test(){
  //   this.uploaded=!this.uploaded;
  //   console.log(this.uploaded);
  // }

  // onReload() {
  //   // this.router.navigate(['servers'], {relativeTo: this.route});
  // }

  // onFileSelected(event) {
  //   // console.log(event);
  //   this.selectedFile =<File> event.target.files[0];
  // }

  // onUpload() {
  //   const fd=new FormData();
  //   fd.append('file-to-upload',this.selectedFile,this.selectedFile.name);
  //   this.http.post('http://localhost:4201/test',fd, {responseType: 'text'}).subscribe(
  //     (res)=>{
  //       console.log(res);
  //       this.uploaded=true;
  //     }
  //   )
  // }

}
