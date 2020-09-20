module.exports = {
    // Admining
    addAdmin: async function (newAdmin) { },
    registerAdmin: async function (regAdmin) { },
    addTeacher: async function (newTeacher) { },
    updateTeacher: async function (teacher) { },
    deleteTeacher: async function (teacher) { },
    addStudent: async function (newStudent) { },
    updateStudent: async function (student) { },
    deleteStudent: async function (student) { },
    // Teaching
    registerTeacher: async function (newTeacher) { },
    updateStudent: async function (student) { },
    addMeet: async function (teacher, student, newMeet) { },
    // Parenting
    confirmation: async function (meet) { },
    // Information
    // // Getting
    getAllStudents: async function () { },
    getAllTeachers: async function () { },
    getMyStudents: async function (teacher) { },
    getStudentMeetings: async function (teacher, student) { },
    // // Searching
    searchTeacher: async function (inp) { },
    searchStudent: async function (inp) { },
}