import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';

import { HomeBienvenidaRoutingModule } from './home-bienvenida-routing.module';
import { HomeBienvenidaComponent } from './home-bienvenida.component';
import { HeaderComponent } from '../components/header/header.component';


@NgModule({
  declarations: [
    HomeBienvenidaComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    HomeBienvenidaRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeBienvenidaModule { }
