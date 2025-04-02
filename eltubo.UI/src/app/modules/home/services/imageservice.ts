import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // 📌 Esto hace que el servicio esté disponible globalmente
})
export class ImageService {
  getImagesData() {
    return [
      {
        code: 'cafe1.jpg',
        name: 'Foto 22',
      },
      {
        code: 'cafe2.jpg',
        name: 'Foto 2',
      },
      {
        code: 'cafe3.jpg',
        name: 'Foto 3',
      },
    ];
  }

  getImagesSmall() {
    return Promise.resolve(this.getImagesData().slice(0, 10));
  }
}
