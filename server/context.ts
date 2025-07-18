import * as trpcNext from '@trpc/server/adapters/next';
import { prisma } from './prisma';

export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => ({ req, res, prisma });
export type Context = Awaited<ReturnType<typeof createContext>>;
