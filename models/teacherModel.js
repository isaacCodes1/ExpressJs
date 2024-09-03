let teachers = [];

const createTeacher = (teacher) => {
    teachers.push(teacher);
    return teacher;
};

const getAllTeachers = () => {
    return teachers;
};

const getTeacherById = (id) => {
    return teachers.find(teacher => teacher.id === id);
};

const updateTeacher = (id, updatedTeacher) => {
    const index = teachers.findIndex(teacher => teacher.id === id);
    if (index !== -1) {
        teachers[index] = { ...teachers[index], ...updatedTeacher };
        return teachers[index];
    }
    return null;
};

const deleteTeacher = (id) => {
    const index = teachers.findIndex(teacher => teacher.id === id);
    if (index !== -1) {
        return teachers.splice(index, 1);
    }
    return null;
};

module.exports = {
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
};
