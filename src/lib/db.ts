import { PrismaClient } from "@/generated/prisma/client";
import { env } from "@/lib/env";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL, //fromtype using t3-osss
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

//if does not existe it is going to create a new instance of prisma client with the adapter .
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// check if we are not in productioon then we will store this new Prisma instance inside of global for Prisma
export { prisma };
