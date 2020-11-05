require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const morgan = require('morgan')
const { limiter } = require("./back-end/services/rate-limiter");

const server = express();

const authRoutes = require("./back-end/routes/auth");
const teacherRoutes = require('./back-end/routes/teacher')
const signRouter = require('./back-end/routes/signature')




// server.use(morgan({morganFormat:'tiny'}))
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "client/dist/reports")));


server.use("/api/auth", authRoutes);
server.use('/api/teacher', teacherRoutes)
server.use('/api/sign', signRouter)



// const r = 'Reports!A11:L11'
// function findFirstNumberOnString(str) {
//     return str.split(':')[0].replace(/\D/g, "")
// }

// console.log(Number(findFirstNumberOnString(r)))


server.get("*", (request, response) => {
    response.sendFile(path.resolve("client/dist/reports/index.html"));
});




server.listen(process.env.PORT || 3000, () => console.log("Listening"));
