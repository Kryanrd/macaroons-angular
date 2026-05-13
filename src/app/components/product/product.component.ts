import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductType } from 'src/app/types/product.type';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: ProductType;
  @Input() index: number = 0;
  @Output() addToCartEvent = new EventEmitter<ProductType>();

  constructor(public cartService: CartService) {
    this.product = {
      image: '',
      title: '',
      count: '',
      price: 0
    }
  }

  public addToCart(product: ProductType): void {
    // this.scrollTo(target);
    // this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.productsCount++;
    this.cartService.totalAmount += product.price;
    this.addToCartEvent.emit(product);
  }

}
