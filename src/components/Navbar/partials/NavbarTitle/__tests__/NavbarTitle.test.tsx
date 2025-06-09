import { render, renderWithClient, screen } from '@/utils/test-utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavbarTitle } from '../NavbarTitle';
import { firstProduct } from '@/utils/__mocks__/product.mocks';
import { productQueryKey } from '@/queries';
import routerMock from 'next-router-mock';

describe('NavbarTitle', () => {
  let queryClient: QueryClient;

  it('should render with valid title', async () => {
    queryClient = new QueryClient();

    queryClient.setQueryData(
      [productQueryKey, String(firstProduct.id)],
      firstProduct
    );

    routerMock.setCurrentUrl(`/produto?id=${firstProduct.id}`);

    render(
      <QueryClientProvider client={queryClient}>
        <NavbarTitle />
      </QueryClientProvider>
    );

    const heading = screen.getByRole('heading');

    expect(heading.innerHTML).toEqual(firstProduct.title);
  });

  it('should render with undefined title', () => {
    renderWithClient(<NavbarTitle />);

    const heading = screen.getByRole('heading');

    expect(heading.innerHTML).toEqual('');
  });
});
