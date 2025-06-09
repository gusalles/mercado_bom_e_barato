import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export * from '@testing-library/react';
export * from '@testing-library/user-event';

interface ReactQueryWrapper {
  children: ReactNode;
}

export const ReactQueryWrapper = ({ children }: ReactQueryWrapper) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export function renderWithClient(ui: ReactNode) {
  return render(<ReactQueryWrapper>{ui}</ReactQueryWrapper>);
}
