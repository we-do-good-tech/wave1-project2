require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const morgan = require('morgan')
const server = express();

const authRoutes = require("./back-end/routes/auth");
const teacherRoutes = require('./back-end/routes/teacher')
const { limiter } = require("./back-end/services/rate-limiter");


// server.use(morgan({morganFormat:'tiny'}))
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "client/dist/reports")));

// const { google } = require("googleapis");
// const creds = require("./lior-sheets.creds.json");
// const keys = require('./back-end/config/keys');
// const fetch = require('node-fetch')
// const client = new google.auth.JWT(
//     creds.client_email,
//     null,
//     creds.private_key,
//     [keys.GOOGLE_SHEETS.scope]
// );
// client.authorize((error, tokens) => {
//     if (error) {
//         console.log(error);
//         // callClient(error, null);
//     } else {
//         console.log("connected");
//         nu(client);
//     }
// });

// async function nu(theClient) {

//     // headers: {
//     //     'x-goog-api-client': 'gdcl/4.4.1 gl-node/13.7.0 auth/6.1.0',
//     //     'Accept-Encoding': 'gzip',
//     //     'User-Agent': 'google-api-nodejs-client/4.4.1 (gzip)',
//     //     'Content-Type': 'application/json',
//     //     Accept: 'application/json'
//     //   },

//     const report = {
//         ticketNo: 123,
//         reportDate: '12/12/2020',
//         reportActivitis: 'reportActivitis',
//         reportComments: 'reportComments',
//         reportStartTime: '04:20',
//         reportEndTime: '05:34',
//         reportRangeTimne: '05:00',
//         isParentSign: false,
//         parentSignImageUrl: null
//     }

//     theClient.getRequestHeaders().then(async (authoraize) => {

//         const setReport = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1iT7Cu_tBxdMXXfQp7vTGXPg2VUEv79mMtcbufN5k4AA/values/Reports%21A%3AZ:append?valueInputOption=USER_ENTERED', {
//             method: 'POST',
//             headers: authoraize,
//             body: '{"values":[["2020-10-14","20:37","22:39","02:02","DASDAS","DASDASD",false,null,"15"]]}'
//         })

//     })
// }




server.use("/api/auth", authRoutes);
server.use('/api/teacher', teacherRoutes)


server.get("*", (request, response) => {
    response.sendFile(path.resolve("client/dist/reports/index.html"));
});


server.listen(process.env.PORT || 3000, () => console.log("Listening"));
