let students = [];

const createStudent = (student) => {
    students.push(student);
    return student;
};

const getAllStudents = () => {
    return students;
};

const getStudentById = (id) => {
    return students.find(student => student.id === id);
};

const updateStudent = (id, updatedStudent) => {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...updatedStudent };
        return students[index];
    }
    return null;
};

const deleteStudent = (id) => {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        return students.splice(index, 1);
    }
    return null;
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
};
