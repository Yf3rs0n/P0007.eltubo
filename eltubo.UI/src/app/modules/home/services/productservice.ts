import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // 📌 Esto hace que el servicio esté disponible globalmente
})
export class ProductService {
  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'img1.png',
        price: 50000,
        category: 'Accessories',
        quantity: 50,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        color1: '#9e300d',
        color2: '#566523',
      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'Product Description',
        image: 'img2.png',
        price: 25000,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        color1: '#5F1600',
        color2: '#DF8519',
      }
    ];
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }
}
