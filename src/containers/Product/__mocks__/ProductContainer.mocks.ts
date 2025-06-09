import { ProductContainerProps } from '../Product';
import { firstProduct } from '@/utils/__mocks__/product.mocks';

export const loadedProductDetailsMock: ProductContainerProps = {
  isLoading: false,
  hasError: false,
  product: firstProduct,
};

export const loadingProductDetailsMock: ProductContainerProps = {
  isLoading: true,
  hasError: false,
  product: firstProduct,
};

export const errorOnLoadProductDetailsMock: ProductContainerProps = {
  isLoading: false,
  hasError: true,
  product: firstProduct,
};
