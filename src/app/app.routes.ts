import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';

export const routes: Routes = [
       {
              title: "Dashboard",
              path: 'dashboard',
              component: DashboardComponent,
              canActivate: []
       }
];
