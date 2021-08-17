import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'contact', component: ContactComponent},
  {path : 'users', component :UserComponent}, 
  {path : 'users/:id', component : UserDetailsComponent}, 
  {path : 'products', component :ProductComponent},
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : '**', component : ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
