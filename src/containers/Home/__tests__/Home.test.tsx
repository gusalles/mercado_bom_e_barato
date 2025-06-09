import { renderWithClient, screen, userEvent } from '@/utils/test-utils';
import { HomeContainer } from '../Home';
import {
  errorOnLoadProductsMock,
  loadedProductsMock,
  loadingProductsMock,
  paginationMock,
} from '../__mocks__/home.mocks';

import routerMock from 'next-router-mock';

describe('HomePage', () => {
  it('should render products list', () => {
    renderWithClient(<HomeContainer {...loadedProductsMock} />);

    const productTitle = loadedProductsMock.data?.products[0].title ?? '';
    const product = screen.getByText(productTitle);

    expect(product).toBeInTheDocument();
  });

  it('should render products loading', () => {
    renderWithClient(<HomeContainer {...loadingProductsMock} />);

    const loading = screen.getAllByTestId('products-loading');

    expect(loading.length > 1).toBeTruthy();
  });

  it('should show error on trying to load products list', () => {
    renderWithClient(<HomeContainer {...errorOnLoadProductsMock} />);
    const title = screen.getByRole('heading', {
      name: /Não foi possível carregar os produtos./i,
    });

    expect(title).toBeInTheDocument();
  });

  it('should navigate between products pages', () => {
    renderWithClient(<HomeContainer {...paginationMock} />);

    const firstProductTitle = loadedProductsMock.data?.products[0].title;
    const secondProductTitle = loadedProductsMock.data?.products[1].title;

    const product = screen.getByText(`${firstProductTitle}`);

    expect(product).toBeInTheDocument();

    const pagination = screen.getByRole('button', { name: /2/ });

    userEvent.click(pagination);

    const secondProduct = screen.getByText(`${secondProductTitle}`);

    expect(secondProduct).toBeInTheDocument();
  });

  it('should redirect to product details page when click in product button', async () => {
    renderWithClient(<HomeContainer {...loadedProductsMock} />);

    const buttons = screen.getAllByRole('button', { name: /Ver mais/i });

    await userEvent.click(buttons[0]);

    expect(routerMock.asPath).toEqual('/products/1');
  });
});
