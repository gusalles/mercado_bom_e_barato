import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { productsQueryKey, useProducts } from '@/queries';
import { getProducts } from '@/services';
import { Home } from '@/containers/Home';

interface Params {
  query: {
    page: string;
  };
}

interface HomePageProps {
  page: number;
}

export async function getServerSideProps(ctx: Params) {
  const page = Number(ctx.query.page) || 1;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [productsQueryKey, page],
    queryFn: () => getProducts(page),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      page,
    },
  };
}

export default function HomePage({ page: initialPage }: HomePageProps) {
  const router = useRouter();

  const queryPage = Number(router.query.page);
  const page = queryPage || initialPage;

  const { data, isFetching, isLoading } = useProducts(page);

  return <Home data={data} isLoading={isFetching || isLoading} page={page} />;
}
