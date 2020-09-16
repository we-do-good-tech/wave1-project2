const mongoose = require('mongoose'),
    cors = require('cors'),
    keys = require('./config/keys'),
    server = require('express')();
server.listen(process.env.PORT || keys.port, () => console.log("Listening"));