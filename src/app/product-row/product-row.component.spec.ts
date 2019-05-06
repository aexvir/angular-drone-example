import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRowComponent } from './product-row.component';
import {ProductImageComponent} from '../product-image/product-image.component';
import {Product} from '../product.model';

describe('ProductRowComponent', () => {
  let component: ProductRowComponent;
  let fixture: ComponentFixture<ProductRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRowComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRowComponent);
    component = fixture.componentInstance;
    component.product = new Product(
      '435-ret',
      'Graphics Card Deluxe',
      'http://images.test/graphics/card/deluxe.jpg',
      ['Graphics', 'Accessories', 'Deluxe'],
      567.78
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
