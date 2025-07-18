'use client';
import { useState } from 'react';

import { trpc, getTrpcClient } from '@/trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => getTrpcClient());

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
