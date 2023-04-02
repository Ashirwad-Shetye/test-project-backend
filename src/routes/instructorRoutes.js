const express = require("express");
const router = express.Router();
const instructorController = require("../controller/instructorController");

// Get all instructor
router.get("/instructors", instructorController.getAllInstructors);

// Get a single instructor
router.get("/instructors/:id", instructorController.getInstructor);

// Create a new instructor
router.post("/instructors", instructorController.createInstructor);

// Update an existing instructor
router.put("/instructors/:id", instructorController.updateInstructor);

// Delete an existing instructor
router.delete("/instructors/:id", instructorController.deleteInstructor);

module.exports = router;
