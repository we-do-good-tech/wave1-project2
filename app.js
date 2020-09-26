const db = require('./back-end/db/db'),
    cors = require('cors'),
    keys = require('./back-end/config/keys'),
    express = require('express'),
    server = express();

db.connectMongoDB();


server.use(cors())
server.use(express.json())



const teacherRouters = require('./back-end/routes/teacher')
const adminRouters = require('./back-end/routes/admin')
const meetingRouters = require('./back-end/routes/meeting');

server.use('/api/user/admin', adminRouters)
server.use('/api/user/teacher', teacherRouters)
server.use('/api/user/meetings', meetingRouters)



server.listen(process.env.PORT || keys.port, () => console.log("Listening"));