import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  health: baseProcedure.query((async) => {

    //demo errorboundary
    // throw new Error("Somethings went wrong");

    return { status: "ok", code: 123 };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
