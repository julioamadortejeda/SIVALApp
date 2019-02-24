import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/main/main.module#MainModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: 'src/app/login/login.module#LoginModule'
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
