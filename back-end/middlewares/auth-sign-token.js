const keys = require('../config/keys')
const JsonWebToken = require('jsonwebtoken')



async function verifyTokenSign(request, response, next) {

    const { token } = request.body
    console.log(token)

    try {
        const decodedToken = await JsonWebToken.verify(token, keys.TOKENS.PARENT_SIGN_ACCESS_TOKEN.secretTokenKey)

        request.respotInfo = {
            studentName: decodedToken.studentName,
            ticketNo: decodedToken.ticketNo,
            reportDate: decodedToken.reportDate,
            reportActivitis: decodedToken.reportActivitis,
            reportComments: decodedToken.reportComments,
            reportStartTime: decodedToken.reportStartTime,
            reportEndTime: decodedToken.reportEndTime,
            reportRangeTimne: decodedToken.reportRangeTimne,
            index: decodedToken.index,
        }

        Object.freeze(request.respotInfo)
        console.log(decodedToken)
        next()

    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
}


module.exports = {
    verifyTokenSign
}