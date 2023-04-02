const express = require("express");
const router = express.Router();
const lectureController = require("../controller/lectureController");

// Get all Lectures
router.get("/courses/:courseId/lectures", lectureController.getAllLectures);

// Get a single lecture
router.get("/lectures/:id", lectureController.getLecture);

// Create a new lecture
router.post("/courses/:courseId/lectures", lectureController.createLecture);

// Update an existing lecture
router.put("/lectures/:id", lectureController.updateLecture);

// Delete an existing lecture
router.delete("/lectures/:id", lectureController.deleteLecture);

module.exports = router;
