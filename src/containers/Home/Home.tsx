import { ProductsResponse } from '@/services';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import {
  HomeError,
  Pagination,
  ProductList,
} from '@/containers/Home/components';
import { HomeSection, HomeTitle, PaginationContainer } from './Home.styles';

export interface HomeContainerProps {
  page: number;
  isLoading: boolean;
  hasError?: boolean;
  data?: ProductsResponse;
}

export function HomeContainer({
  page,
  data,
  isLoading,
  hasError,
}: HomeContainerProps) {
  const router = useRouter();

  const handlePaginationRedirect = (_: unknown, value: number) => {
    router.push('/', { query: { page: value } });
  };

  const getTotalPages = (maxItemsPerPage: number, total: number): number => {
    return Math.ceil(total / maxItemsPerPage);
  };

  if (hasError) return <HomeError />;

  return (
    <Container>
      <HomeTitle>Produtos</HomeTitle>
      <HomeSection>
        <ProductList products={data?.products} isLoading={isLoading} />
        {!isLoading && data && (
          <PaginationContainer>
            <Pagination
              count={getTotalPages(data!.maxItensPerPage, data!.total)}
              page={page}
              shape="rounded"
              onChange={handlePaginationRedirect}
              size="large"
            />
          </PaginationContainer>
        )}
      </HomeSection>
    </Container>
  );
}
