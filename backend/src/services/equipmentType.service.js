// equipmentType.service.js
// Contains equipment type-related Prisma operations.

import prisma from "../config/prismaClient.js";

export const createEquipmentType = async ({ name, description }) => {
  return prisma.equipmentType.create({
    data: {
      name,
      description,
    },
  });
};

export const getEquipmentTypes = async () => {
  return prisma.equipmentType.findMany();
};
