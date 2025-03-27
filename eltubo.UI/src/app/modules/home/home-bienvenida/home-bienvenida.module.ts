import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

import { HomeBienvenidaRoutingModule } from './home-bienvenida-routing.module';
import { HomeBienvenidaComponent } from './home-bienvenida.component';
import { HeaderComponent } from '../components/header/header.component';
import { ProductoComponent } from '../components/producto/producto.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  declarations: [
    HomeBienvenidaComponent,
        HeaderComponent,
        ProductoComponent,
        FooterComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    HomeBienvenidaRoutingModule
  ]
})
export class HomeBienvenidaModule { }
