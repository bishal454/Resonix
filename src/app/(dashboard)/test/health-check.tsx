"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export function HealthCheck() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.health.queryOptions()); // this is type safe datamodel  usesuspensequery use to  prefetch tthe data from server component

  return (
    <div className="rounded-lg border p-6 text-center">
      <p className="text-muted-foreground text-sm"> trpc status</p>
      <p className="mt-2 text-lg font-semibold"> {data.status}</p>

      <p>Health check </p>
    </div>
  );
}
