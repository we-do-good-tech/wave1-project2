const keys = require('../config/keys')
const axios = require('axios')
const parseCSV = require('csv-parse')
const fetch = require('node-fetch')


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

function convertSheetsDataToObjectsArray(data) {
    return data.map(([id, firstName, lastName, phone, email], index) => {
        return {
            id: id,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
        };
    });
}

function convertCSV(data) {
    return new Promise((resolve, reject) => {
        parseCSV(data, {}, (error, data) => {
            if (data[1]) {
                resolve(data[1])
            } else {
                resolve(undefined)
            }
        })
    })
}

exports.findTeacherByEmail = async function (teacherEmail, authorizationToken) {
    // console.log(teacherId)
    console.log(authorizationToken)
    const spreadsheetId = keys.GOOGLE_SHEETS.spreadsheetId
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.coaches
    const query = `select * where E='${teacherEmail}'`;
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

        return convertSheetsDataToObjectsArray([convertData])[0]
    } catch (error) {
        console.log(error)
        throw error
    }
}





