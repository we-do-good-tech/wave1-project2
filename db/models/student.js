const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

const StudentModel = mongoose.model('students', StudentSchema)

module.exports = {
    StudentSchema,
    StudentModel
}