import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsCount: number = 0;
  totalAmount: number = 0;

  constructor() { }
}
