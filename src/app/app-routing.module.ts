import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetClientesComponent } from './get-clientes/get-clientes.component';
import { PostClientesComponent } from './post-clientes/post-clientes.component';
import { PostLoginComponent } from './post-login/post-login.component';

const routes: Routes = [
  { path: '', component: GetClientesComponent },
  { path: 'postclientes', component: PostClientesComponent },
  { path: 'login', component: PostLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
