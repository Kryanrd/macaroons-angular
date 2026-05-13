import { Injectable } from '@angular/core';
import { ProductType } from '../types/product.type';

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        image: 'macaroon1.png',
        title: 'Макарун с малиной',
        count: '1 шт',
        price: 1.70
      },
      {
        image: 'macaroon2.png',
        title: 'Макарун с манго',
        count: '1 шт',
        price: 1.70
      },
      {
        image: 'macaroon3.png',
        title: 'Пирог с ванилью',
        count: '1 шт',
        price: 1.70
      },
      {
        image: 'macaroon3.png',
        title: 'Пирог с фисташками',
        count: '1 шт',
        price: 1.70
      }
    ]
  }
}
