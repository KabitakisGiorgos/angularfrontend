import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RootComponent}  from './root.component'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { routing, mainRoutingProviders } from './main.routes';


@NgModule({
  declarations: [
    AppComponent,RootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routing,
    mainRoutingProviders,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
