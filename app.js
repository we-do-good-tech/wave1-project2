require("dotenv").config();
const cors = require("cors");
const express = require("express");
const debug = require('debug')
const path = require("path");
const morgan = require('morgan')
const helmet = require('helmet');
const keys = require('./back-end/config/keys')
const { apiNotFoundError, handleError } = require('./back-end/middlewares/global.errors')
const session = require('express-session')
const memoryStore = require('memorystore')(session)

const server = express();

server.set('trust proxy', 1);

const authRoutes = require("./back-end/routes/auth");
const teacherRoutes = require('./back-end/routes/teacher')
const signRouter = require('./back-end/routes/signature');

server.use(helmet())
server.use(morgan('dev'))
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "client/dist/reports")));

server.use(session({
    store: new memoryStore({
        checkPeriod: 1000 * 5
    }),
    secret: keys.SESSION.secretSessionKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: keys.SESSION.expiresIn,
        // httpOnly: true,
        // sameSite: true,
        // secure: true
    }
}))





server.use("/api/auth", authRoutes);
server.use('/api/teacher', teacherRoutes)
server.use('/api/sign', signRouter)


server.get("*", (request, response) => {
    response.sendFile(path.resolve("client/dist/reports/index.html"));
});


server.use(apiNotFoundError)
server.use(handleError)



server.listen(process.env.PORT || 3000, () => console.log("Listening"));
