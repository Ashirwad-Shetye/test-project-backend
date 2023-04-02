const Lecture = require("../model/lectureModel");

// Get all lectures for a course
const getAllLectures = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const lectures = await Lecture.find({ course: courseId });
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single lecture
const getLecture = async (req, res) => {
  try {
    const lectureId = req.params.id;
    const lecture = await Lecture.findById(lectureId);
    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }
    res.json(lecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a lecture for a course
const createLecture = async (req, res) => {
  const courseId = req.params.courseId;
  const lecture = new Lecture({ ...req.body, course: courseId });
  try {
    const newLecture = await lecture.save();
    res.status(201).json(newLecture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a lecture
const updateLecture = async (req, res) => {
  try {
    const lectureId = req.params.id;
    const lecture = await Lecture.findById(lectureId);
    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }
    Object.assign(lecture, req.body);
    const updatedLecture = await lecture.save();
    res.json(updatedLecture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a lecture
const deleteLecture = async (req, res) => {
  try {
    const lectureId = req.params.id;
    const lecture = await Lecture.findById(lectureId);
    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }
    await lecture.remove();
    res.json({ message: "Lecture deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllLectures,
  getLecture,
  createLecture,
  updateLecture,
  deleteLecture,
};
