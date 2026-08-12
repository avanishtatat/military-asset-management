// auth.controller.js
// Responsible for handling auth-related request/response flow.
// Business logic is delegated to auth.service.js.

import { loginUser } from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    const authResult = await loginUser(email.toLowerCase().trim(), password);

    if (!authResult) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    return res.status(200).json({
      success: true,
      token: authResult.token,
      user: authResult.user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
