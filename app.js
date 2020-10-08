require("dotenv").config();
const cors = require("cors");
// const keys = require("./back-end/config/keys");
const express = require("express");
const path = require("path");
const server = express();


const authRoutes = require("./back-end/routes/auth");

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'client/dist/reports')));



server.use("/api/auth", authRoutes);


function notDoAYNTHING() { }

server.get('*', (request, response) => {
    response.sendFile(path.resolve('client/dist/reports/index.html'))
})


server.listen(process.env.PORT || 3000, () => console.log("Listening"));
