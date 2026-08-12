// auth.routes.js
// Responsible for defining auth route handlers and attaching middleware.

import express from "express";
import { authPlaceholder } from "../controllers/auth.controller.js";

const router = express.Router();

// Placeholder auth route. Actual auth endpoints will be added later.
router.get("/auth", authPlaceholder);

export default router;
