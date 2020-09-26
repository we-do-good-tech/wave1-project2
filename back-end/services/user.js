module.exports = {
    // Admining
    getAllAdmins: async () => { },
    addAdmin: async (newAdmin) => { },
    registerAdmin: async (regAdmin) => { },
    addTeacher: async (newTeacher) => { },
    updateTeacher: async (teacher) => { },
    deleteTeacher: async (teacher) => { },
    addStudent: async (newStudent) => { },
    updateStudent: async (student) => { },
    deleteStudent: async (student) => { },
    // Teaching
    registerTeacher: async (newTeacher) => { },
    updateStudent: async (student) => { },
    addMeet: async (teacher, student, newMeet) => { },
    // Parenting
    confirmation: async (meet) => { },
    // Information
    // // Getting
    getAllStudents: async () => { },
    getAllTeachers: async () => { },
    getMyStudents: async (teacher) => { },
    getStudentMeetings: async (teacher, student) => { },
    // // Searching
    searchTeacher: async (inp) => { },
    searchStudent: async (inp) => { },
}