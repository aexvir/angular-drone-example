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
        'http://images.test/graphics/card/deluxe.jpg',
        ['Graphics', 'Accessories', 'Deluxe'],
        567.78
      ),
      new Product(
        '398-beast',
        'The HD Beast',
        'http://images.test/graphics/card/beast.jpg',
        ['Graphics', 'Accessories', 'Performance'],
        567.78
      ),
    ];
  }
}
