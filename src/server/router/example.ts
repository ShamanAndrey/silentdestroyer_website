import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("getCount", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.aggregate({
        _sum: {
          count: true,
        }
      });
    },
  })
  .query("getUniqueCount", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.count();
    }
  })
  .mutation("upsertBaited", {
    input: z.object({
      ip: z.string(),
    }),
    async resolve({ ctx,input }) {
      return await ctx.prisma.user.upsert(
        {create : {ip: input.ip}, update : {count : {increment : 1}}, where : {ip : input.ip}}
      );
    }
  })

