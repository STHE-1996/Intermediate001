import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashComponentimplements } from './pages/dash/dash.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

import { ProfileComponent } from './pages/profile/profile.component';
// import { RecyclingLocationComponent } from './pages/recycling-location/recycling-location.component';
import { RoleGuard } from './guards/role.guard';
import { VerificationComponent } from './pages/verification/verification.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { TaskComponent } from './pages/task/task.component';


const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'verification', component: VerificationComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent },
      { path: 'updatePassword', component: UpdatePasswordComponent },
      
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' } // Redirect root to login
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dash', component: DashComponentimplements },
      { path: 'profile', component: ProfileComponent },
      {path: 'task', component: TaskComponent},
      { path: '', redirectTo: 'dash', pathMatch: 'full' } // Redirect root to dash within MainLayout
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
