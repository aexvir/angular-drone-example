import {Component, Input} from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'inventory-app';
  @Input() products: Product[];

  constructor() {
    this.products = [
      new Product(
        '435-ret',
        'Graphics Card Deluxe',
        '/assets/test.png',
        ['Graphics', 'Accessories', 'Deluxe'],
        567.78
      ),
      new Product(
        '398-beast',
        'The HD Beast',
        '/assets/test.png',
        ['Graphics', 'Accessories', 'Performance'],
        567.78
      ),
    ];
  }

  productWasSelected(product: Product) {
    console.log(`Product clicked ${product.name}`);
  }
}
