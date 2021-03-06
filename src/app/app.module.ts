import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetClientesComponent } from './get-clientes/get-clientes.component';
import { PostClientesComponent } from './post-clientes/post-clientes.component';
import { PostLoginComponent } from './post-login/post-login.component';

import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './home/services/services.component';
import { DemoComponent } from './home/demo/demo.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';

import { EquipoComponent } from './equipo/equipo.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PieEstructuraSaldosComponent } from './dashboard/pie-estructura-saldos/pie-estructura-saldos.component';
import { DregistrosComponent } from './dregistros/dregistros.component';

import { NuevoregistroComponent } from './nuevoregistro/nuevoregistro.component';

import { BarChartComponent } from './dashboard/bar-chart/bar-chart.component';
import { PieChartComponent } from './dashboard/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './dashboard/scatter-chart/scatter-chart.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { EstadisticasComponent } from './dashboard/estadisticas/estadisticas.component';
import { NuevacuentaComponent } from './nuevacuenta/nuevacuenta.component';


@NgModule({
  declarations: [
    AppComponent,
    GetClientesComponent,
    PostClientesComponent,
    PostLoginComponent,
    NavBarComponent,
    BannerComponent,
    ServicesComponent,
    DemoComponent,
    FooterComponent,
    HomeComponent,
    EquipoComponent,
    ContactanosComponent,
    DashboardComponent,
    PieEstructuraSaldosComponent,
    DregistrosComponent,
    NuevoregistroComponent,
    BarChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    DashboardAdminComponent,
    EstadisticasComponent,
    NuevacuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
