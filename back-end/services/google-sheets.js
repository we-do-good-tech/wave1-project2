const { google } = require("googleapis");
const creds = require("../../lior-sheets.creds.json");
const keys = require("../config/keys");

function authClient(callClient) {
  const client = new google.auth.JWT(
    creds.client_email,
    null,
    creds.private_key,
    [keys.GOOGLE_SHEETS.scope]
  );

  client.authorize(async (error, tokens) => {
    if (error) {
      console.log(error);
      throw error;
    } else {
      console.log("connected");
      callClient(client);
    }
  });
}

async function authSheets(client) {
  return google.sheets({ version: "v4", auth: client });
}

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

exports.findTeacherById = async function (teacherId, callTeacher) {
  console.log(teacherId);
  return authClient(async (clinet) => {
    try {
      const googleSheetsApi = await authSheets(clinet);

      const data = await getSeetsValues(googleSheetsApi, {
        spreadsheetId: keys.GOOGLE_SHEETS.spreadsheetId,
        range: "Coaches!A2:E4",
      });

      console.log(data);

      const convertData = convertSheetsDataToObjectsArray(data);

      console.log(convertData);

      const findTeacher = convertData.find(
        (teacher) => teacher.id == teacherId
      );
      //   return findTeacher;
      callTeacher(findTeacher);
    } catch (error) {
      console.log("ERROR");
      console.log(error);
      callTeacher(error);
    }
  });
};
