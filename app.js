require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const morgan = require('morgan')
const keys = require('./back-end/config/keys')
const session = require('express-session')
const { limiter } = require("./back-end/services/rate-limiter");
const memoryStore = require('memorystore')(session)

const server = express();

const authRoutes = require("./back-end/routes/auth");
const teacherRoutes = require('./back-end/routes/teacher')
const signRouter = require('./back-end/routes/signature');


server.use(morgan('dev'))
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(session({
    store: new memoryStore({
        checkPeriod: 1000 * 5
    }),
    secret: keys.SESSION.secretSessionKey,
    resave: false,
    cookie: {
        expires: keys.SESSION.expiresIn
    }

}))


server.use("/api/auth", authRoutes);
server.use('/api/teacher', teacherRoutes)
server.use('/api/sign', signRouter)




server.use(express.static(path.join(__dirname, "client/dist/reports")));

server.get("*", (request, response) => {
    response.sendFile(path.resolve("client/dist/reports/index.html"));
});


server.use((request, response, next) => {
    console.log('ERROR NOT FOUND')
    const error = new Error('NOT-FOUND')
    error.message = 'NOT FOUND'
    error.status = 404
    next(error)
})


server.use((error, request, response, next) => {
    console.log(error)
    response.status(error.status || 500).send({
        message: error.message || 'SERVER ERROR'
    })
})


server.listen(process.env.PORT || 3000, () => console.log("Listening"));
