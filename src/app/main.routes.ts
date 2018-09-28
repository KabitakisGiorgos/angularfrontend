import { Routes, RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';

export const mainRoutes: Routes = [
  { path: 'device/:id', component: AppComponent }
];
export const mainRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(mainRoutes);