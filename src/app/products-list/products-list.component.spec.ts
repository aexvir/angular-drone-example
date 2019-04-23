import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductsListComponent} from './products-list.component';
import {Product} from '../product.model';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent]
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event with the clicked product', () => {
    const productList: Product[] = component.productsList
    const product = productList.pop();

    spyOn(component.productSelected, 'emit');

    component.clicked(product);
    fixture.detectChanges();

    expect(component.productSelected.emit).toHaveBeenCalledWith(product);
  });
});
