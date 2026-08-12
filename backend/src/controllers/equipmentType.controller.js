// equipmentType.controller.js
// Handles equipment type-related request/response flow.

import {
  createEquipmentType,
  getEquipmentTypes,
} from "../services/equipmentType.service.js";

export const createEquipmentTypeHandler = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const equipmentType = await createEquipmentType({ name, description });

    return res.status(201).json({
      success: true,
      equipmentType,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getEquipmentTypesHandler = async (req, res) => {
  try {
    const equipmentTypes = await getEquipmentTypes();

    return res.status(200).json({
      success: true,
      equipmentTypes,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
