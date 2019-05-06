import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.less']
})
export class ProductImageComponent implements OnInit {
  @Input() product: Product;

  ngOnInit() {
  }

}
