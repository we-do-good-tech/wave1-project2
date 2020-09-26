const db = require('../back-end/db/db'),
    cors = require('cors'),
    keys = require('../back-end/config/keys'),
    express = require('express'),
    path = require('path'),
    server = express();

// db.connectMongoDB();
// const teacherRouters = require('./back-end/routes/teacher')
// const adminRouters = require('./back-end/routes/admin')
// const meetingRouters = require('./back-end/routes/meeting');


server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'dist/reports')))


// server.use('/api/user/admin', adminRouters)
// server.use('/api/user/teacher', teacherRouters)
// server.use('/api/user/meetings', meetingRouters)

server.get('*', (request, response) => {
    response.sendFile(path.resolve('dist/reports/index.html'))
})


server.listen(process.env.PORT || keys.port, () => console.log("Listening"));