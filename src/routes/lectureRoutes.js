const express = require("express");
const router = express.Router();
const lectureController = require("../controller/lectureController");

// Get all Lectures
router.get("/courses/:courseId", lectureController.getAllLectures);

// Get a single lecture
router.get("/lectures/:id", lectureController.getLecture);

// Create a new lecture
router.post("/courses/:courseId", lectureController.createLecture);

// Update an existing lecture
router.put("/:id", lectureController.updateLecture);

// Delete an existing lecture
router.delete("/:id", lectureController.deleteLecture);

module.exports = router;
