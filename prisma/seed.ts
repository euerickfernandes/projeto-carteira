// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🔼 PRISMA SEED");

  console.log("✅ PRISMA SEED SUCCESS");
}

main()
  .catch((e) => {
    console.error("❌ PRISMA SEED ERROR", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
