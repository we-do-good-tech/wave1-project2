const googleSheetsService = require('../services/google-sheets')
const keys = require('../config/keys')


async function findReport(request, response, next) {
    const { ticketNo, reportDate } = request.body
    const query = `select * where J=${Number(request.userData.teacherId)}and I=${ticketNo} and A=date '${reportDate}'`
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.reports

    try {
        const report = await googleSheetsService.find(
            query,
            sheetId,
            request.sheetsClientData.authorizationToken
        )
        console.log(report)
        if (report) {
            request.findReport = convertSheetsDataToObjectsArray(report, 'REPORTS')
            return next()
        }

        next()

    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }

}


module.exports = {
    findReport
}