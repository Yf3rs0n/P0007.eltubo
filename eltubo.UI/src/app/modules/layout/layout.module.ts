import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';

import { providePrimeNG } from 'primeng/config';
import  Aura  from '@primeng/themes/aura';  


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  providers: [
    providePrimeNG({
      theme: {
          preset: Aura
      }
  })
  ],
})
export class LayoutModule { }
