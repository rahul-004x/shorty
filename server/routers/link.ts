import { z } from 'zod';
import { nanoid } from 'nanoid';
import { router, publicProcedure } from '@/server/trpc';

export const linkRouter = router({
  create: publicProcedure
    .input(
      z.object({
        long: z.string().url(),
        custom: z.string().min(3).max(30).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { long, custom } = input;

      // If custom slug provided, ensure it’s unique
      if (custom) {
        const exists = await ctx.prisma.link.findUnique({
          where: { short: custom },
        });
        if (exists) throw new Error('Custom alias already taken');
      }

      const short = custom ?? nanoid(6);

      const link = await ctx.prisma.link.create({
        data: { long, short },
      });

      return { shortUrl: `http://localhost:3000/${link.short}` };
    }),
});
