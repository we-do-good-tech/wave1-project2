const JsonWebToken = require("jsonwebtoken");


function createToken(options, secret, expiresIn) {
    if (Object.keys(options).length === 0) throw "";
    return JsonWebToken.sign(options, secret, {
        expiresIn: expiresIn,
    });
}

module.exports = {
    createToken,
};
