import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Head from 'next/head';
import { Layout } from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  //Uso do useState para evitar recriação do QueryClient em cada renderização
  //Isso é importante para manter o estado do cache entre as renderizações
  //e evitar problemas de performance.
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Mercado B&B</title>
        <meta name="description" content="Mercado Bom e Barato" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <AppCacheProvider>
          {/* O HydrationBoundary é usado para hidratar o estado do React Query no lado do cliente */}
          {/* Isso é necessário para que o estado do cache seja mantido entre as renderizações */}
          <HydrationBoundary state={pageProps.dehydratedState}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </HydrationBoundary>
        </AppCacheProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
