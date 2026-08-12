// base.service.js
// Contains base-related Prisma operations.

import prisma from "../config/prismaClient.js";

export const createBase = async ({ name, location }) => {
  return prisma.base.create({
    data: {
      name,
      location,
    },
  });
};

export const getBases = async () => {
  return prisma.base.findMany();
};
