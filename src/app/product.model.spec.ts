import {Product} from './product.model';

describe('Product', () => {
  let product: Product;
  beforeEach(() => {
    product = new Product(
      '431-abc',
      'HardDiskDrive',
      'http://images.test/path/to/awsome/harddisk/drive.jpg',
      ['Storage', 'Accessories', 'HDD'],
      369.88
    );
  });

  it('should create an instance', () => {
    expect(product).toBeTruthy();
  });

  it('should have a sku', () => {
    expect(product.sku).toBeDefined('no sku found');
    expect(product.sku).toEqual('431-abc');
  });

  it('should have a name', () => {
    expect(product.name).toBeDefined('no name found');
    expect(product.name).toEqual('HardDiskDrive');
  });

  it('should have an image url', () => {
    expect(product.imageUrl).toBeDefined('no image url found');
    expect(product.imageUrl).toEqual('http://images.test/path/to/awsome/harddisk/drive.jpg');
  });

  it('should have a department collection', () => {
    expect(product.department).toBeDefined('no department found');
    expect(product.department).toEqual(['Storage', 'Accessories', 'HDD']);
  });

  it('should have a price', () => {
    expect(product.price).toBeDefined('no price found');
    expect(product.price).toEqual(369.88);
  });
});
