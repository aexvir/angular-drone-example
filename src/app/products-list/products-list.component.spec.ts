import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsListComponent} from './products-list.component';
import {Product} from '../product.model';
import {ProductRowComponent} from '../product-row/product-row.component';
import {ProductImageComponent} from '../product-image/product-image.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent, ProductRowComponent, ProductImageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    component.productsList = [
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
        'http://images.test/graphics/card/beast.jpg',
        ['Graphics', 'Accessories', 'Performance'],
        567.78
      ),
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event with the clicked product', () => {
    const productList: Product[] = component.productsList;
    const product = productList.pop();

    spyOn(component.productSelected, 'emit');

    component.clicked(product);
    fixture.detectChanges();

    expect(component.productSelected.emit).toHaveBeenCalledWith(product);
  });

  it('should be able to tell if the tested product is the selected one', () => {
    const productList: Product[] = component.productsList;
    const product = productList.pop();

    component.clicked(product);
    fixture.detectChanges();

    expect(component.isSelected(product)).toBeTruthy();
  });

  it('should be able to tell if the tested product is not the selected one', () => {
    const productList: Product[] = component.productsList;
    const product = productList.pop();
    const otherProduct = productList.pop();

    component.clicked(product);
    fixture.detectChanges();

    expect(component.isSelected(otherProduct)).toBeFalsy();
  });

  it('should return false if no product is selected', () => {
    const productList: Product[] = component.productsList;
    const product = productList.pop();

    expect(component.isSelected(product)).toBeFalsy();
  });
});
