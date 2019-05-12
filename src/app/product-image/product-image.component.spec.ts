import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductImageComponent} from './product-image.component';
import {Product} from '../product.model';

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
      '/assets/test.png',
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

  it('should know the imageUrl of the product', () => {
    expect(component.product.imageUrl).toEqual('/assets/test.png');
  });
});
