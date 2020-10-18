const keys = require('../config/keys')
const fetch = require('node-fetch')
const { convertCSV } = require('../helpers/csv')
const { convertSheetsDataToObjectsArray } = require('../helpers/tojson')


// async function getSeetsValues(googleSheetsApi, options) {
//     const data = await googleSheetsApi.spreadsheets.values.get(options);
//     return data.data.values;
// }

// async function updateSheets(googleSheetsApi) {
//     const options = {
//         spreadsheetId: '1iT7Cu_tBxdMXXfQp7vTGXPg2VUEv79mMtcbufN5k4AA',
//         range: 'Children!A7',
//         valueInputOption: 'USER_ENTERED',
//         resource: { values: [['49']] }
//     }
//     const x = await googleSheetsApi.spreadsheets.values.update(options)
//     console.log(x)
// }






exports.findTeacherByEmail = async function (teacherEmail, authorizationToken) {
    // console.log(teacherId)
    console.log(authorizationToken)
    const spreadsheetId = keys.GOOGLE_SHEETS.spreadsheetId
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.teachers
    const query = `select * where C='${teacherEmail}'`;
    // const sheetId = '622666265'

    try {
        const foundUser = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&gid=${sheetId}&tq=${encodeURI(query)}`, {
            method: 'GET',
            headers: authorizationToken
        })

        const textResponse = await foundUser.text()
        console.log(textResponse)

        const convertData = await convertCSV(textResponse)
        if (!convertData) {
            return
        }

        return convertSheetsDataToObjectsArray(convertData, 'TEACHERS')[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}



module.exports.findStudents = async function (teacherId, authorizationToken) {
    const spreadsheetId = keys.GOOGLE_SHEETS.spreadsheetId
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.childrens
    const query = `select * where E=${Number(teacherId)}`;

    console.log(teacherId)
    try {
        const foundStudents = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&gid=${sheetId}&tq=${encodeURI(query)}`, {
            method: 'GET',
            headers: authorizationToken
        })

        const textResponse = await foundStudents.text()

        const convertData = await convertCSV(textResponse)
        if (!convertData) {
            return
        }

        return convertSheetsDataToObjectsArray(convertData, 'CHILDRENS')
    } catch (error) {
        console.log(error)
        throw error
    }
}


module.exports.createReport = async function (report, authorizationToken) {

}





