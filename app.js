const db = require('./db/db'),
    cors = require('cors'),
    keys = require('./config/keys'),
    express = require('express'),
    server = express();

db.connectMongoDB();


server.use(cors())
server.use(express.json())



const teacherRouters = require('./routes/teacher')
const adminRouters = require('./routes/admin')
const meetingRouters = require('./routes/meeting');

server.use('/api/user/admin', adminRouters)
server.use('/api/user/teacher', teacherRouters)
server.use('/api/user/meetings', meetingRouters)



server.listen(process.env.PORT || keys.port, () => console.log("Listening"));