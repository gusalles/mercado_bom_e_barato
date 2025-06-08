import { ProductsResponse } from '@/services';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import { MAX_ITEMS_PER_PAGE } from '@/constants/pagination';
import { Pagination, ProductList } from '@/containers/Home/components';
import { HomeSection, HomeTitle, PaginationContainer } from './Home.styles';

interface HomeContainerProps {
  page: number;
  isLoading: boolean;
  data?: ProductsResponse;
}

export function HomeContainer({ page, data, isLoading }: HomeContainerProps) {
  const router = useRouter();

  const handlePaginationRedirect = (_: unknown, value: number) => {
    router.push('/', { query: { page: value } });
  };

  const getTotalPages = (itemsLoaded: number, total: number): number => {
    if (itemsLoaded < MAX_ITEMS_PER_PAGE) {
      return Math.ceil(total / MAX_ITEMS_PER_PAGE);
    }

    return Math.ceil(total / itemsLoaded);
  };

  return (
    <Container>
      <HomeTitle>Produtos</HomeTitle>
      <HomeSection>
        <ProductList products={data?.products} isLoading={isLoading} />
        {!isLoading && data && (
          <PaginationContainer>
            <Pagination
              count={getTotalPages(data!.limit, data!.total)}
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
