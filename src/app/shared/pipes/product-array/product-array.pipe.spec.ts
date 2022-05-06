import { ProductArrayPipe } from './product-array.pipe';

describe('ProductArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
