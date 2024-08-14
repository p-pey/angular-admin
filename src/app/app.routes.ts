import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
       {
              title: "Dashboard",
              path: 'dashboard',
              component: DashboardComponent,
              canActivate: []
       },
       {
              title: "Login",
              path: "login",
              component: LoginComponent,
       }
];
