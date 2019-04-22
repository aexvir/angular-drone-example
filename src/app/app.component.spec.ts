import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Product} from './product.model';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
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
    expect(app).toBeTruthy();
  });

  it(`should have as title 'inventory-app'`, () => {
    expect(app.title).toEqual('inventory-app');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to inventory-app!');
  });

  it('should have products', () => {
    expect(app.products).toBeDefined('no products found');
  });
});
