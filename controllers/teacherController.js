const { v4: uuidv4 } = require('uuid');
const teacherModel = require('../models/teacherModel');

const createTeacher = (req, res) => {
    const { name, className } = req.body;

    if (!name || !className) {
        return res.status(400).json({ message: "Name and class are required." });
    }

    const newTeacher = {
        id: uuidv4(),
        name,
        className,
    };

    teacherModel.createTeacher(newTeacher);
    res.status(201).json(newTeacher);
};

const getAllTeachers = (req, res) => {
    const teachers = teacherModel.getAllTeachers();
    res.json(teachers);
};

const getTeacherById = (req, res) => {
    const { id } = req.params;
    const teacher = teacherModel.getTeacherById(id);

    if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
    }

    res.json(teacher);
};

const updateTeacher = (req, res) => {
    const { id } = req.params;
    const updatedTeacher = req.body;

    const teacher = teacherModel.updateTeacher(id, updatedTeacher);

    if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
    }

    res.json(teacher);
};

const deleteTeacher = (req, res) => {
    const { id } = req.params;

    const teacher = teacherModel.deleteTeacher(id);

    if (!teacher) {
        return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(204).end();
};

module.exports = {
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
};
