const JsonWebToken = require("jsonwebtoken");
const keys = require("../config/keys");

function createToken(options) {
  if (Object.keys(options).length === 0) throw "";
  return JsonWebToken.sign(options, keys.TOKENS.ACCESS_TOKEN.secretTokenKey, {
    expiresIn: keys.TOKENS.ACCESS_TOKEN.expiresIn,
  });
}

module.exports = {
  createToken,
};
