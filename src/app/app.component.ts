import { Component, OnInit } from '@angular/core';
import { ProductType } from './types/product.type';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { AdvantageType } from './types/advantage.type';
import { AdvantageService } from './services/advantage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductsService]
})
export class AppComponent implements OnInit {
  public showPresent: boolean = true;
  public phoneNumber: string = '375293689868';
  public instagramUrl: string = 'https://www.instagram.com';

  constructor(private productService: ProductsService, private advantageService: AdvantageService, public cartService: CartService) { }

  public advantages: AdvantageType[] = [];
  public products: ProductType[] = [];

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.advantages = this.advantageService.getAdvantages();
  }

  onProductAdded(product: ProductType): void {
    alert(`${product.title} добавлен в корзину!`);
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({ behavior: "smooth" });
  }

  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert("Заполните пиццы");
      return;
    }
    if (!this.formValues.name) {
      alert("Заполните имя");
      return;
    }
    if (!this.formValues.phone) {
      alert("Заполните телефон");
      return;
    }
    alert("Спасибо за заказ!");

    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  }
}
