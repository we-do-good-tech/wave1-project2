const db = require('./db/db'),
    cors = require('cors'),
    keys = require('./config/keys'),
    server = require('express')();
db.connectMongoDB();

const UserModel = require('./db/models/users')
const { StudentModel } = require('./db/models/student')

function addUser() {
    const newUser = new UserModel({
        first_name: 'Avi',
        last_name: 'Balili',
        role: false,
        email: 'w@ga.com',
        password: '1234567',
        studets: []
    })

    newUser.save()
}

// addUser()

function addStudentToUser() {
    const newSdudent = new StudentModel({
        first_name: 'a',
        last_name: 'a',
        parent: 'hore',
        email: 'a@d.com'
    })

    const findUser = UserModel.findOneAndUpdate(
        {
            _id: "5f62126ad2576d1a8ceba8c3"
        },
        {
            $push: {
                students: newSdudent
            }
        },
        {
            upsert: true,
            new: true
        }
    ).then(() => { })
}

// addStudentToUser()

server.listen(process.env.PORT || keys.port, () => console.log("Listening"));