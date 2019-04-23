import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Product} from './product.model';
import {ProductsListComponent} from './products-list/products-list.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ProductsListComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    app.products = [
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
  });

  it('should create the app', () => {
    fixture.detectChanges();
    expect(app).toBeTruthy();
  });

  it('should have products', () => {
    fixture.detectChanges();
    expect(app.products).toBeDefined('no products found');
  });
});
