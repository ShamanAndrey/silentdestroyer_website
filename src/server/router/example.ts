import { createRouter } from "./context";
import { z } from "zod";

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  })
  .query("data", {
    async resolve({ctx}) {
      
      const ips =  await ctx.prisma.counter.findMany()

      return ips.map(x => x.ipAddress).join(", ")
    }
  })
  .mutation("addBaited", {
    input: z.object({
      ipAddress: z.string(),
    }),
    async resolve({ ctx,input }) {
      return await ctx.prisma.counter.create({
        data: {
          ipAddress: input.ipAddress,
          count : 1
        },
      });
    }
  })

