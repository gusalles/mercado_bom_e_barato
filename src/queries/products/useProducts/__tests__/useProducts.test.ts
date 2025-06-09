import nock from 'nock';
import { renderHook, waitFor, ReactQueryWrapper } from '@/utils/test-utils';
import {
  firstProduct,
  secondProduct,
} from '@/containers/Product/__mocks__/product.mocks';
import { useProducts } from '../useProducts';
import { ProductsResponse } from '@/services';

describe('useProducts', () => {
  const productResponseMock: ProductsResponse = {
    limit: 2,
    total: 2,
    maxItensPerPage: 2,
    skip: 0,
    products: [firstProduct, secondProduct],
  };

  it('should return a products list when de request succeeded', async () => {
    nock('https://dummyjson.com')
      .get('/products?limit=2&skip=0')
      .reply(200, productResponseMock);

    const { result } = renderHook(() => useProducts(1, 2), {
      wrapper: ReactQueryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data?.products.length).toEqual(
      productResponseMock.products.length
    );
  });

  it('should return undefined when request failed', async () => {
    nock('https://dummyjson.com')
      .get('/products?limit=12&skip=0')
      .reply(500, { message: 'Internal error' });

    const { result } = renderHook(() => useProducts(1), {
      wrapper: ReactQueryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(false));

    expect(result.current.data).toEqual(undefined);
  });
});
