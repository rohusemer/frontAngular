import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EquipoComponent } from './equipo/equipo.component';
import { GetClientesComponent } from './get-clientes/get-clientes.component';
import { PostClientesComponent } from './post-clientes/post-clientes.component';
import { PostLoginComponent } from './post-login/post-login.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DregistrosComponent } from './dregistros/dregistros.component';
import { NuevoregistroComponent } from './nuevoregistro/nuevoregistro.component';

import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { EstadisticasComponent } from './dashboard/estadisticas/estadisticas.component';
import { NuevacuentaComponent } from './nuevacuenta/nuevacuenta.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: PostClientesComponent },
  { path: 'login', component: PostLoginComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'registros', component: DregistrosComponent },
  { path: 'nuevoregistro', component: NuevoregistroComponent },
  { path: 'nuevacuenta', component: NuevacuentaComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
