require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const morgan = require('morgan')
const { limiter } = require("./back-end/services/rate-limiter");
const session = require('express-session')
const memoryStore = require('memorystore')(session)

const server = express();

const authRoutes = require("./back-end/routes/auth");
const teacherRoutes = require('./back-end/routes/teacher')
const signRouter = require('./back-end/routes/signature');

// const { ConfirmCode } = require("./back-end/services/confirm-code");


server.use(morgan('dev'))
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "client/dist/reports")));

server.use(session({
    store: new memoryStore({
        checkPeriod: 1000 * 60 * 2
    }),
    secret: 'DSFADFASDF324FDSdsafds',
    resave: false
}))


server.use("/api/auth", authRoutes);
server.use('/api/teacher', teacherRoutes)
server.use('/api/sign', signRouter)


server.get("*", (request, response) => {
    response.sendFile(path.resolve("client/dist/reports/index.html"));
});




// server.use((request, response, next) => {
//     const error = new Error('NOT-FOUND')
//     next(error)
// })

// server.use((error, request, response, next) => {
//     response.status(404).send({
//         message: error
//     })
// })


server.listen(process.env.PORT || 3000, () => console.log("Listening"));
