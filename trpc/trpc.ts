import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '@/server/routers/_app';

function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});
