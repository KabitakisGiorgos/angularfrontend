import {
  Component,
  OnInit,
  EventEmitter
} from '@angular/core';
import {
  ServersService
} from './servers.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {
    id: number,
    name: string,
    status: string
  } [] = [];

  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute,private http:HttpClient) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  selectedFile:File = null;
  uploaded:boolean=false;
 
  test(){
    this.uploaded=!this.uploaded;
    console.log(this.uploaded);
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

  onFileSelected(event) {
    // console.log(event);
    this.selectedFile =<File> event.target.files[0];
  }

  onUpload() {
    const fd=new FormData();
    fd.append('file-to-upload',this.selectedFile,this.selectedFile.name);
    this.http.post('http://localhost:4201/test',fd, {responseType: 'text'}).subscribe(
      (res)=>{
        console.log(res);
        this.uploaded=true;
      }
    )
  }

}
