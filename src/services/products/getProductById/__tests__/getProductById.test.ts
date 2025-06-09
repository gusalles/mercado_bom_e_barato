import nock from 'nock';
import { getProductById } from '../getProductById';
import { firstProduct } from '@/utils/__mocks__/product.mocks';

describe('getProductById', () => {
  it('should return a product when de request succeeded', async () => {
    nock('https://dummyjson.com').get('/products/1').reply(200, firstProduct);

    const response = await getProductById(1);

    expect(response).toEqual(firstProduct);
  });

  it('should return undefined when request failed', async () => {
    const expectedMessage = 'Erro ao buscar o produto com ID 560';

    nock('https://dummyjson.com')
      .get('/products/560')
      .reply(500, { message: 'Internal error' });

    try {
      const response = await getProductById(560);

      expect(response).toEqual(undefined);
    } catch (error: any) {
      expect(error.message).toEqual(expectedMessage);
    }
  });
});
