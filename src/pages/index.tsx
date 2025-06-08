import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { productsQueryKey, useProducts } from '@/queries';
import { getProducts } from '@/services';
import { Home } from '@/containers/Home';
import { useEffect, useState } from 'react';

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
  const [currentPage, setCurrentPage] = useState(initialPage);

  const { data, isFetching, isLoading } = useProducts(currentPage);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const query = new URLSearchParams(url.split('?')[1]);
      const newPage = Number(query.get('page')) || 1;
      setCurrentPage(newPage);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, []);

  return (
    <Home data={data} isLoading={isFetching || isLoading} page={currentPage} />
  );
}
