import { renderWithClient, screen } from '@/utils/test-utils';
import { HomeContainer } from '../Home';
import {
  errorOnLoadProductsMock,
  loadedProductsMock,
  loadingProductsMock,
  paginationMock,
} from '../__mocks__/home.mocks';

describe('HomePage', () => {
  it('render component', () => {
    renderWithClient(<HomeContainer {...loadedProductsMock} />);
    const title = screen.getByRole('heading', { name: /produtos/i });
    expect(title).toBeInTheDocument();
  });

  it('render products list', () => {
    renderWithClient(<HomeContainer {...loadedProductsMock} />);
    const productTitle = loadedProductsMock.data?.products[0].title;
    const product = screen.getByText(`${productTitle}`);
    expect(product).toBeInTheDocument();
  });
});
