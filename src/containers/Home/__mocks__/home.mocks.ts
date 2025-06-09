import { Product } from '@/services';
import { HomeContainerProps } from '../Home';
import {
  firstProduct,
  secondProduct,
} from '@/containers/Product/__mocks__/product.mocks';

const productsMock: Product[] = [firstProduct, secondProduct];

export const loadedProductsMock: HomeContainerProps = {
  isLoading: false,
  hasError: false,
  page: 1,
  data: {
    limit: 2,
    total: 2,
    maxItensPerPage: 2,
    skip: 0,
    products: productsMock,
  },
};

export const loadingProductsMock: HomeContainerProps = {
  isLoading: true,
  hasError: false,
  page: 1,
};

export const errorOnLoadProductsMock: HomeContainerProps = {
  isLoading: false,
  hasError: true,
  page: 1,
};

export const paginationMock: HomeContainerProps = {
  isLoading: false,
  hasError: false,
  page: 1,
  data: {
    limit: 1,
    total: 2,
    maxItensPerPage: 1,
    skip: 0,
    products: productsMock,
  },
};
