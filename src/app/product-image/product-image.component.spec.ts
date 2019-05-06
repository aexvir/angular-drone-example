import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductImageComponent} from './product-image.component';
import {Product} from '../product.model';
import {ProductRowComponent} from '../product-row/product-row.component';

describe('ProductImageComponent', () => {
  let component: ProductImageComponent;
  let fixture: ComponentFixture<ProductImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductImageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductImageComponent);
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

  it('should be created with an product', () => {
    expect(component.product).toBeDefined();
  });

  it('should know the name of the product', () => {
    expect(component.product.name).toEqual('Graphics Card Deluxe');
  });

  it('should know the sku of the product', () => {
    expect(component.product.sku).toEqual('435-ret');
  });

  it('should know the imageUrl of the product', () => {
    expect(component.product.imageUrl).toEqual('http://images.test/graphics/card/deluxe.jpg');
  });

  it('should know the departments of the product', () => {
    expect(component.product.department).toEqual(['Graphics', 'Accessories', 'Deluxe']);
  });

  it('should know the price of the product', () => {
    expect(component.product.price).toEqual(567.78);
  });
});
