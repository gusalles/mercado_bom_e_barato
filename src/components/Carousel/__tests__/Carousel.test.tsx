import { render, screen } from '@/utils/test-utils';
import { Carousel } from '../Carousel';
import {
  firstProduct,
  secondProduct,
} from '@/containers/Product/__mocks__/product.mocks';

describe('Carousel', () => {
  it('should render', () => {
    render(
      <Carousel
        images={[firstProduct.thumbnail, secondProduct.thumbnail]}
        alt="image alt"
      />
    );

    const carousel = screen.getByTestId('carousel');

    expect(carousel).toMatchSnapshot();
  });
});
