const { google } = require("googleapis");
const creds = require("../../lior-sheets.creds.json");
const keys = require("../config/keys");

function authorizeClient(callClient) {
  console.log("authorizeClient");

  const client = new google.auth.JWT(
    creds.client_email,
    null,
    creds.private_key,
    [keys.GOOGLE_SHEETS.scope]
  );
  client.authorize((error, tokens) => {
    if (error) {
      // console.log(error);
      callClient(error, null);
    } else {
      console.log("connected");
      callClient(null, client);
    }
  });
}

module.exports = {
  authorizeClient,
};
