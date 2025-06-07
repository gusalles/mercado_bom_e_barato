import { Container, Typography } from '@mui/material';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { productsQueryKey, useProducts } from '@/queries';
import { getProducts } from '@/services';
import { ProductList } from '@/components/ProductList';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [productsQueryKey],
    queryFn: getProducts,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const { data, error, isFetching } = useProducts();

  return (
    <>
      <Container
        component="section"
        sx={{ marginBottom: { _: '24px', md: '40px' } }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '2rem',
            lineHeight: '130%',
          }}
        >
          Produtos
        </Typography>
      </Container>
      <Container
        component="section"
        sx={{
          bgcolor: { _: 'transparent', md: 'white' },
          borderRadius: '16px',
          paddingY: '16px',
          paddingX: '22px',
        }}
      >
        {isFetching && <p>Carregando...</p>}
        {error && <p>{error.message}</p>}
        {data && <ProductList products={data.products} />}
      </Container>
    </>
  );
}
