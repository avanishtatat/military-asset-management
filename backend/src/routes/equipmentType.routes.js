// equipmentType.routes.js
// Defines equipment type management routes and protects them with auth + RBAC.

import express from "express";
import {
  createEquipmentTypeHandler,
  getEquipmentTypesHandler,
} from "../controllers/equipmentType.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/rbac.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, authorizeRoles("ADMIN"), createEquipmentTypeHandler);
router.get("/", authMiddleware, authorizeRoles("ADMIN"), getEquipmentTypesHandler);

export default router;
