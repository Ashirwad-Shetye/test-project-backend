const express = require("express");
const router = express.Router();
const instructorController = require("../controller/instructorController");

// Get all instructor
router.get("/", instructorController.getAllInstructors);

// Get a single instructor
router.get("/:id", instructorController.getInstructor);

// Create a new instructor
router.post("/", instructorController.createInstructor);

// Update an existing instructor
router.put("/:id", instructorController.updateInstructor);

// Delete an existing instructor
router.delete("/:id", instructorController.deleteInstructor);

module.exports = router;
