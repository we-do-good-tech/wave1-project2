<<<<<<< HEAD
const {
  authSheets,
  authorizeClient,
} = require("../db-google-sheets/connect-google-sheets");

async function authSeets(request, response, next) {
  authorizeClient((error, client) => {
    // console.log(client)
    if (error) {
      console.log("CLIENT ERROR");
      return response.status(400).send({
        message: "משתמש לא נמצא",
      });
    } else {
      const sheets = authSheets(client);
      // console.log(sheets)
      request.googleSheetsApi = sheets;

      next();
    }
  });
}

=======
const { authorizeClient } = require('../db-google-sheets/connect-google-sheets')


async function authSeets(request, response, next) {
    authorizeClient((error, client) => {
        // console.log(client)
        if (error) {
            console.log('CLIENT ERROR')
            return response.status(400).send({
                message: 'Unauthorize'
            })
        } else {
            client.getRequestHeaders()
                .then((authorizationToken) => {
                    request.authorizationToken = authorizationToken
                    next()
                })
        }
    })
}


>>>>>>> refs/remotes/origin/master
module.exports = {
  authSeets,
};
