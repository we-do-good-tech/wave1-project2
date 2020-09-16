const mongoose = require('mongoose')
const { StudentSchema } = require('./student')

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    role: {
        type: Time,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    students: [StudentSchema]

})


const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel