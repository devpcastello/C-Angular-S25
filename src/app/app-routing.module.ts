import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {path:'home', component:HomeComponent ,...canActivate(()=> redirectUnauthorizedTo(['/login']))  },
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent,  },
  {path:'list', component:ListComponent},
  {path:'', pathMatch:'full', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
