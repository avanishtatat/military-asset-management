// base.routes.js
// Defines base management routes and protects them with auth + RBAC.

import express from "express";
import { createBaseHandler, getBasesHandler } from "../controllers/base.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/rbac.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, authorizeRoles("ADMIN"), createBaseHandler);
router.get("/", authMiddleware, authorizeRoles("ADMIN"), getBasesHandler);

export default router;
