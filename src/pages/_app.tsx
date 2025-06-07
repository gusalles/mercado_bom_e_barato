import '@/styles/globals.css';
import Head from 'next/head';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from '@tanstack/react-query';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '@/styles/theme';
import { Layout } from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AppCacheProvider>
      <Head>
        <title>Mercado B&B</title>
        <meta name="description" content="Mercado Bom e Barato" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        {/* O HydrationBoundary é usado para hidratar o estado do React Query no lado do cliente */}
        {/* Isso é necessário para que o estado do cache seja mantido entre as renderizações */}
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </HydrationBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppCacheProvider>
  );
}
