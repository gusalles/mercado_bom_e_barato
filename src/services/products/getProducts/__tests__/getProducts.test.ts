import nock from 'nock';
import { getProducts } from '../getProducts';
import { productResponseMock } from '@/utils/__mocks__/product.mocks';

describe('getProducts', () => {
  it('should return a products list when de request succeeded', async () => {
    nock('https://dummyjson.com')
      .get('/products?limit=2&skip=0')
      .reply(200, productResponseMock);

    const response = await getProducts(1, 2);

    expect(response).toEqual(productResponseMock);
  });

  it('should return undefined when request failed', async () => {
    const expectedMessage = 'Erro ao buscar os produtos';

    nock('https://dummyjson.com')
      .get('/products?limit=12&skip=559')
      .reply(500, { message: 'Internal error' });

    try {
      const response = await getProducts(560);

      expect(response).toEqual(undefined);
    } catch (error: any) {
      expect(error.message).toEqual(expectedMessage);
    }
  });
});
