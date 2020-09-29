const db = require('./back-end/db/db')
const cors = require('cors')
const keys = require('./back-end/config/keys')
const express = require('express')
const path = require('path')
const server = express()

// db.connectMongoDB();
// const teacherRouters = require('./back-end/routes/teacher')
// const adminRouters = require('./back-end/routes/admin')
// const meetingRouters = require('./back-end/routes/meeting');


server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'client/dist/reports')))


// server.use('/api/user/admin', adminRouters)
// server.use('/api/user/teacher', teacherRouters)
// server.use('/api/user/meetings', meetingRouters)

server.post('/fake/userId', (request, response) => {
    const users = [
        {
            name: 'user-one',
            id: 123456789
        },
        {
            name: 'user-two',
            id: 987654321
        }
    ]
    const { userId } = request.body

    const userFound = users.find((user) => user.id === userId)
    console.log(userFound)

    if (userFound) {
        return response.status(200).send({
            message: 'User Found',
            user: userFound
        })
    }
    response.status(404).send({
        message: 'Auth Fail',
    })

})


server.get('*', (request, response) => {
    response.sendFile(path.resolve('client/dist/reports/index.html'))
})


server.listen(process.env.PORT || keys.port, () => console.log("Listening"));