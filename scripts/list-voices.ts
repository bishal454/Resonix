import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  const voices = await prisma.voice.findMany({
    where: { variant: "SYSTEM" },
    select: { id: true, name: true, r2ObjectKey: true },
    take: 5,
  });

  console.log(JSON.stringify(voices, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
