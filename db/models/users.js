const mongoose = require('mongoose')


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
        type: String,
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
    students: {
        type: [{
            first_name: {
                type: String,
                required: true
            },
            last_name: {
                type: String,
                required: true
            },
            parent_name: {
                type: String,
                required: true
            },
            parent_email: {
                type: String,
                required: true
            },
            meetings: {
                type: [{
                    meeting_date: {
                        type: Date,
                        required: true
                    },
                    time_started: {
                        type: String,
                        required: true
                    },
                    time_ended: {
                        type: String,
                        required: true
                    },
                    hours_span: {
                        type: Number,
                        required: true
                    },
                    topics: {
                        type: String,
                        required: true
                    },
                    home_work: {
                        type: String
                    },
                    notes: {
                        type: String
                    },
                    parent_sign: {
                        type: Boolean,
                        required: true
                    },
                    parent_exsit_on_meeting: {
                        type: Boolean,
                        required: true
                    }
                }]
            }
        }]
    }
})


const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel