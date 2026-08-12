// rbac.middleware.js
// Responsible for role-based authorization checks using req.user.role.

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ success: false, message: "Forbidden" });
    }

    return next();
  };
};
