// auth.routes.js
// Responsible for defining auth route handlers and attaching middleware.

import express from "express";
import { login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);

export default router;
