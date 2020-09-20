const db = require('./db/db'),
    cors = require('cors'),
    keys = require('./config/keys'),
    express = require('express'),
    server = express();

db.connectMongoDB();


server.use(cors())
server.use(express.json())



const userRouter = require('./routes/user')

server.use('/api/user', userRouter)



server.listen(process.env.PORT || keys.port, () => console.log("Listening"));