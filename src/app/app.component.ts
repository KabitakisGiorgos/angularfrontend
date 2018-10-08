import { HttpClient } from '@angular/common/http';

declare function test(callback): any;

import { Component, OnInit } from '@angular/core';
import { MessagingService } from "./messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message;

  constructor(private msgService: MessagingService) {}

  ngOnInit() {
    this.msgService.getPermission()
    this.msgService.receiveMessage((test)=>{
      console.log(test)
    }),
    this.message = this.msgService.currentMessage
  }

}