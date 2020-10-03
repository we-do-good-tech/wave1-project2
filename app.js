require('dotenv').config()
const cors = require('cors')
const keys = require('./back-end/config/keys')
const express = require('express')
const path = require('path')
const server = express()
const { google } = require('googleapis')
const { authClient, getSheets, sheetsOptions } = require('./back-end/services/google-sheets')


// const teacherRouters = require('./back-end/routes/teacher')
// const adminRouters = require('./back-end/routes/admin')
// const meetingRouters = require('./back-end/routes/meeting');


server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(express.static(path.join(__dirname, 'client/dist/reports')))


// server.use('/api/user/admin', adminRouters)
// server.use('/api/user/teacher', teacherRouters)
// server.use('/api/user/meetings', meetingRouters)
// console.log(keys.spreadsheetId)




async function getDocument() {

    try {


        const gsapi = google.sheets({ version: 'v4', auth: theClient })

        const options = {
            spreadsheetId: keys.GOOGLE_SHEETS.spreadsheetId,
            range: 'Coaches!A2:A4',
        };

        let data = await gsapi.spreadsheets.values.get(options);

        console.log(data.data.values[0])
    } catch (error) {

    }



    // for (let i = 0; i < data.data.values.length - 1; i++) {
    //     let newDoc = createDocument(data.data.values[0], data.data.values[i])
    //     console.log(newDoc)



    // }
    // const update = {
    //     spreadsheetId: '1iT7Cu_tBxdMXXfQp7vTGXPg2VUEv79mMtcbufN5k4AA',
    //     range: 'Children!A7',
    //     valueInputOption: 'USER_ENTERED',
    //     resource: { values: [['49']] }
    // }


    // const x = await gsapi.spreadsheets.values.update(update)
    // console.log(x)


}




authClient(async (clinet) => {
    const googleSheetsApi = authSheets(clinet)

    const options = sheetsOptions(keys.GOOGLE_SHEETS.spreadsheetId, 'Coaches!A2:E4')


    let data = await googleSheetsApi.spreadsheets.values.get(options);

    // let arrObj = data.data.values.map(([id, name, lname, phone, email]) => {
    //     return {
    //         id: id,
    //         name: name,
    //         lname: lname,
    //         phone: phone,
    //         email: email
    //     }
    // })

    console.log(arrObj)
})


server.post('/teacher/teacherId', (request, response) => {


})


server.get('*', (request, response) => {
    response.sendFile(path.resolve('client/dist/reports/index.html'))
})


server.listen(process.env.PORT || keys.port, () => console.log("Listening"));