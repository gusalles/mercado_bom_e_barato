import { renderWithClient, screen } from '@/utils/test-utils';
import { ProductContainer } from '../Product';
import {
  firstProduct,
  loadedProductDetailsMock,
  loadingProductDetailsMock,
  errorOnLoadProductDetailsMock,
} from '../__mocks__/product.mocks';

describe('ProductPage', () => {
  it('should render product details', () => {
    renderWithClient(<ProductContainer {...loadedProductDetailsMock} />);

    const productDescription = firstProduct.description;
    const product = screen.getByText(`${productDescription}`);

    expect(product).toBeInTheDocument();
  });

  it('should render product details loading', () => {
    renderWithClient(<ProductContainer {...loadingProductDetailsMock} />);

    const loading = screen.getAllByTestId('product-loading');

    expect(loading.length > 0).toBeTruthy();
  });

  it('should show error on trying to load product details', () => {
    renderWithClient(<ProductContainer {...errorOnLoadProductDetailsMock} />);
    const title = screen.getByRole('heading', {
      name: /Não foi possível carregar as informações do produto./i,
    });

    expect(title).toBeInTheDocument();
  });
});
