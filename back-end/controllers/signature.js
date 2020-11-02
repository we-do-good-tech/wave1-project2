const keys = require('../config/keys')
const googleSheetsService = require("../services/google-sheets");

module.exports.verifyLink = async function (request, response) {
    if (request.respotInfo) {
        response.status(200).send({
            studentName: request.respotInfo.studentName,
            ticketNo: request.respotInfo.ticketNo,
            reportDate: request.respotInfo.reportDate,
            reportActivitis: request.respotInfo.reportActivitis,
            reportComments: request.respotInfo.reportComments,
            reportStartTime: request.respotInfo.reportStartTime,
            reportEndTime: request.respotInfo.reportEndTime,
            reportRangeTimne: request.respotInfo.reportRangeTimne,
            index: request.respotInfo.index,
        })
    } else {
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }

}


module.exports.parentSign = async function (request, response) {
    const { index } = request.respotInfo

    const sheetName = keys.GOOGLE_SHEETS.sheetsNames.reports
    const range = `!G${index}:H${index}`

    let body = `{"values":[
            [    
                ${true},
                "${request.body.singImageBase64}"
            ]
        ]}`

    try {
        const updateDateParent = await googleSheetsService.update(
            range,
            sheetName,
            body,
            request.sheetsClientData.authorizationToken
        )

        // console.log(updateDateParent)
        if (updateDateParent.updatedColumns > 0) {
            return response.status(200).send({
                message: 'SIGNATURE UPDATE'
            })
        }

        response.status(402).send({
            message: "UPDATE SIGN FAIL",
        });

    } catch (error) {
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }

}