import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionDashboardRoutingModule } from './administracion-dashboard-routing.module';
import { AdministracionDashboardComponent } from './administracion-dashboard.component';


@NgModule({
  declarations: [
    AdministracionDashboardComponent
  ],
  imports: [
    CommonModule,
    AdministracionDashboardRoutingModule
  ]
})
export class AdministracionDashboardModule { }
