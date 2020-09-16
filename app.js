const db = require('./db/db'),
    cors = require('cors'),
    keys = require('./config/keys'),
    server = require('express')();
db.connectMongoDB();
server.listen(process.env.PORT || keys.port, () => console.log("Listening"));