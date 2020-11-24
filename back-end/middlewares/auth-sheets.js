const { authorizeClient } = require("../db-google-sheets/connect-google-sheets");

async function authSeets(request, response, next) {
    authorizeClient((error, client) => {
        // console.log(client)
        if (error) {
            console.log("CLIENT ERROR");
            return response.status(401).send({
                message: "Unauthorize",
            });
        } else {
            client.getRequestHeaders().then(async (authorizationToken) => {
                request.sheetsClientData = {
                    authorizationToken: authorizationToken,
                }
                Object.freeze(request.sheetsClientData)
                next();
            });
        }
    });
}

module.exports = {
    authSeets,
};
