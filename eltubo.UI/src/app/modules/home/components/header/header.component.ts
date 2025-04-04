import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Image } from '../../models/images';
import { ImageService } from '../../services/imageservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) {}

  responsiveOptions: any[] | undefined;
  linear: any;

  ngOnInit() {
    this.imageService.getImagesSmall().then((data) => {
        console.log('Imágenes cargadas:', data); // 🛠️ Verifica si llegan datos
        this.images = data;
      });
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
