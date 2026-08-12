// auth.controller.js
// Responsible for handling auth-related request/response flow.
// Business logic is delegated to auth.service.js.

export const authPlaceholder = (req, res) => {
  res.status(501).json({ message: "Auth controller placeholder" });
};
