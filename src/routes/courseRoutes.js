const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");

// Get all courses
router.get("/", courseController.getAllCourses);

// Get a single course
router.get("/:id", courseController.getCourse);

// Create a new course
router.post("/", courseController.createCourse);

// Update an existing course
router.put("/:id", courseController.updateCourse);

// Delete an existing course
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
