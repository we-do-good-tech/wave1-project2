const { google } = require('googleapis')
const creds = require('../../lior-sheets.creds.json')
const keys = require('../config/keys')


function authClient(callClient) {
    const client = new google.auth.JWT(
        creds.client_email,
        null,
        creds.private_key,
        [keys.GOOGLE_SHEETS.scope]
    )

    client.authorize(async (error, tokens) => {
        if (error) {
            console.log(error);
            throw error
        }
        else {
            console.log('connected');
            callClient(client)
        }
    })
}


function authSheets(client) {
    return google.sheets({ version: 'v4', auth: client })
}


function sheetsOptions(spreadsheetId, range) {
    return {
        spreadsheetId: spreadsheetId,
        range: range,
    }
}



function getSeetsValues() {
    return
}



module.exports = {
    authClient,
    authSheets,
    sheetsOptions
}

