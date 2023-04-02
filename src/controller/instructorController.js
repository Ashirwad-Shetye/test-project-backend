const Instructor = require("../model/instructorModel");

// Get all instructors
const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json(instructors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single instructor
const getInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }
    res.json(instructor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create an instructor
const createInstructor = async (req, res) => {
  const instructor = new Instructor(req.body);
  try {
    const newInstructor = await instructor.save();
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an instructor
const updateInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }
    Object.assign(instructor, req.body);
    const updatedInstructor = await instructor.save();
    res.json(updatedInstructor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an instructor
const deleteInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findById(req.params.id);
    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }
    await instructor.remove();
    res.json({ message: "Instructor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllInstructors,
  getInstructor,
  createInstructor,
  updateInstructor,
  deleteInstructor,
};
