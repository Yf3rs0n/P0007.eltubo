import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionDashboardComponent } from './administracion-dashboard.component';

const routes: Routes = [{ path: '', component: AdministracionDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionDashboardRoutingModule { }
