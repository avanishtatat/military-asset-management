// base.controller.js
// Handles base-related request/response flow.

import { createBase, getBases } from "../services/base.service.js";

export const createBaseHandler = async (req, res) => {
  try {
    const { name, location } = req.body;

    if (!name || !location) {
      return res.status(400).json({
        success: false,
        message: "Name and location are required",
      });
    }

    const base = await createBase({ name, location });

    return res.status(201).json({
      success: true,
      base,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getBasesHandler = async (req, res) => {
  try {
    const bases = await getBases();

    return res.status(200).json({
      success: true,
      bases,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
