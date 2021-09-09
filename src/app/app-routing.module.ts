import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EquipoComponent } from './equipo/equipo.component';
import { GetClientesComponent } from './get-clientes/get-clientes.component';
import { PostClientesComponent } from './post-clientes/post-clientes.component';
import { PostLoginComponent } from './post-login/post-login.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: PostClientesComponent },
  { path: 'login', component: PostLoginComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'contactanos', component: ContactanosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
