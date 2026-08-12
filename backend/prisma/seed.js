import "dotenv/config";
import bcrypt from "bcryptjs";
import prisma from "../src/config/prismaClient.js";

const ADMIN_EMAIL = "admin@military.local";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "AdminPassword123!";

async function main() {
  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

  await prisma.user.upsert({
    where: { email: ADMIN_EMAIL },
    update: {},
    create: {
      email: ADMIN_EMAIL,
      password: hashedPassword,
      name: "Administrator",
      role: "ADMIN",
    },
  });

  console.log("Seeded admin user:", ADMIN_EMAIL);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
