import { PrismaClient } from "@prisma/client";

// Reusable Prisma client instance for the backend.
const prisma = new PrismaClient();

export default prisma;
