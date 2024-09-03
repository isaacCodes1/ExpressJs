const { v4: uuidv4 } = require('uuid');
const studentModel = require('../models/studentModel');

const createStudent = (req, res) => {
    const { name, className } = req.body;

    if (!name || !className) {
        return res.status(400).json({ message: "Name and class are required." });
    }

    const newStudent = {
        id: uuidv4(),
        name,
        className,
    };

    studentModel.createStudent(newStudent);
    res.status(201).json(newStudent);
};

const getAllStudents = (req, res) => {
    const students = studentModel.getAllStudents();
    res.json(students);
};

const getStudentById = (req, res) => {
    const { id } = req.params;
    const student = studentModel.getStudentById(id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};

const updateStudent = (req, res) => {
    const { id } = req.params;
    const updatedStudent = req.body;

    const student = studentModel.updateStudent(id, updatedStudent);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
};

const deleteStudent = (req, res) => {
    const { id } = req.params;

    const student = studentModel.deleteStudent(id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(204).end();
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
