const JsonWebToken = require("jsonwebtoken");
const keys = require('../config/keys')


module.exports.verifyToken = async function (request, response) {
    const { token } = request.body

    try {
        const decodedToken = await JsonWebToken.verify(token, keys.TOKENS.PARENT_SIGN_ACCESS_TOKEN.secretTokenKey)

        console.log(decodedToken)
        response.status(200).send({
            studentName: decodedToken.studentName,
            ticketNo: decodedToken.ticketNo,
            reportDate: decodedToken.reportDate,
            reportActivitis: decodedToken.reportActivitis,
            reportComments: decodedToken.reportComments,
            reportStartTime: decodedToken.reportStartTime,
            reportEndTime: decodedToken.reportEndTime,
            reportRangeTimne: decodedToken.reportRangeTimne,
            index: decodedToken.index,
        })

    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }

}