import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { PrismaClient } from "./src/generated/prisma/client";

async function main() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  const prisma = new PrismaClient({ adapter });

  const voices = await prisma.voice.findMany({
    where: { variant: "SYSTEM" },
    select: { id: true, name: true, r2ObjectKey: true },
    orderBy: { name: "asc" },
  });

  console.log("\nAvailable System Voices:");
  console.log("========================\n");

  for (const voice of voices) {
    console.log(`${voice.name}: ${voice.r2ObjectKey}`);
  }

  await prisma.$disconnect();
}

main();
