import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AdminListComponent } from './pages/dashboard/admin-list/admin-list.component';
import { SettingComponent } from './pages/dashboard/setting/setting.component';

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
       },
       {
              title: "Admin List",
              path: "admins-list",
              component: AdminListComponent
       },
       {
              title: "Setting",
              path: "setting",
              component: SettingComponent
       }
];
