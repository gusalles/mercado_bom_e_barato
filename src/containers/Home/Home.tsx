import { ProductsResponse } from '@/services';
import { Container } from '@mui/material';
import { Pagination } from '@/components/Pagination';
import { ProductList } from '@/components/ProductList';
import { HomeSection, HomeTitle, PaginationContainer } from './Home.styles';
// import { useRouter } from 'next/router';

interface HomeProps {
  page: number;
  isLoading: boolean;
  data?: ProductsResponse;
}

export function Home({ page, data, isLoading }: HomeProps) {
  // const router = useRouter();
  const handlePaginationRedirect = (_: unknown, value: number) => {
    window.location.href = `/?page=${value}`;
    // router.push('/', { query: { page: value } });
  };

  return (
    <Container>
      <HomeTitle>Produtos</HomeTitle>
      <HomeSection>
        <ProductList products={data?.products} isLoading={isLoading} />
        {!isLoading && data && (
          <PaginationContainer>
            <Pagination
              count={Math.ceil(data!.total / data!.limit)}
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
