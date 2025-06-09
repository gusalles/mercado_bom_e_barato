import nock from 'nock';
import { renderHook, waitFor, ReactQueryWrapper } from '@/utils/test-utils';
import { useProduct } from '../useProduct';
import { firstProduct } from '@/utils/__mocks__/product.mocks';

describe('useProduct', () => {
  it('should return a product when de request succeeded', async () => {
    nock('https://dummyjson.com').get('/products/1').reply(200, firstProduct);

    const { result } = renderHook(() => useProduct(1), {
      wrapper: ReactQueryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(firstProduct);
  });

  it('should return undefined when the product was not found', async () => {
    nock('https://dummyjson.com')
      .get('/products/400')
      .reply(404, { message: "Product with id '400' not found" });

    const { result } = renderHook(() => useProduct(400), {
      wrapper: ReactQueryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(false));

    expect(result.current.data).toEqual(undefined);
  });

  it('should return undefined when request failed', async () => {
    nock('https://dummyjson.com')
      .get('/products/560')
      .reply(500, { message: 'Internal error' });

    const { result } = renderHook(() => useProduct(560), {
      wrapper: ReactQueryWrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(false));

    expect(result.current.data).toEqual(undefined);
  });
});
