const keys = require('../config/keys')


async function getSeetsValues(googleSheetsApi, options) {
    const data = await googleSheetsApi.spreadsheets.values.get(options);
    return data.data.values;
}

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
    return data.map(([id, name, lname, phone, email]) => {
        return {
            id: id,
            name: name,
            lname: lname,
            phone: phone,
            email: email,
        };
    });
}

exports.findTeacherById = async function (teacherId, googleSheetsApi) {
    // console.log(teacherId)

    const data = await getSeetsValues(googleSheetsApi, {
        spreadsheetId: keys.GOOGLE_SHEETS.spreadsheetId,
        range: 'Coaches!A2:E4'
    })

    const convertData = convertSheetsDataToObjectsArray(data)

    const findTeacher = convertData.find((teacher) => teacher.id == teacherId)

    // console.log(findTeacher)

    return await findTeacher


}





