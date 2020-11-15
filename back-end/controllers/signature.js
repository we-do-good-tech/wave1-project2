const keys = require('../config/keys')
const googleSheetsService = require("../services/google-sheets");


module.exports.verifyLink = async function (request, response, next) {
    if (!request.respotInfo) {
        return response.status(404).send({
            message: 'INVALID REPORT'
        })
    }

    const { ticketNo, reportDate } = request.respotInfo
    const query = `select G,H where I=${ticketNo} and A=date '${reportDate}'`
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.reports

    try {
        const findReport = await googleSheetsService.find(
            query,
            sheetId,
            request.sheetsClientData.authorizationToken
        )

        if (!findReport) {
            return response.status(404).send({
                message: 'INVALID REPORT'
            })
        }

        if (findReport[0][0] === 'TRUE' && findReport[0][1] !== '') {
            console.log('SIGN IS DONE')
            return response.status(429).send({
                message: 'דיווח חתום'
            })
        }

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

    } catch (error) {
        next(error)
    }

}


module.exports.parentSign = async function (request, response, next) {
    const { index } = request.respotInfo

    const sheetName = keys.GOOGLE_SHEETS.sheetsNames.reports
    const range = `!G${index}:H${index}`

    const body = `{"values":[
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

        if (updateDateParent.updatedColumns > 0) {
            return response.status(200).send({
                message: 'SIGNATURE UPDATE'
            })
        }

        response.status(402).send({
            message: "UPDATE SIGN FAIL",
        });

    } catch (error) {
        next(error)
    }

}