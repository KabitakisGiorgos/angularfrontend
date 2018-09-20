import { Component, AfterViewInit } from '@angular/core';
import { MessagingService } from "./messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'testfirebse';
  message;

  constructor(private msgService: MessagingService) {}

  ngAfterViewInit() {
    this.msgService.getPermission()
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
  }

  // msgService.receiveMessage();
}
