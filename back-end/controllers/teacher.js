const googleSheetsService = require("../services/google-sheets");
const keys = require("../config/keys");

module.exports.getStudents = async function (request, response) {

    try {
        const sdudents = await googleSheetsService.findStudents(
            request.userData.teacherId,
            request.sheetsClientData.authorizationToken
        )

        response.status(200).send(sdudents)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
}


module.exports.createReport = async function (request, response) {
    const { ticketNo, reportDate, reportActivitis, reportComments, reportStartTime, reportEndTime, reportRangeTimne, isParentSign, parentSignImageUrl } = request.body
    const report = {
        ticketNo: ticketNo,
        reportDate: reportDate,
        reportActivitis: reportActivitis,
        reportComments: reportComments,
        reportStartTime: reportStartTime,
        reportEndTime: reportEndTime,
        reportRangeTimne: reportRangeTimne,
        isParentSign: isParentSign,
        parentSignImageUrl: parentSignImageUrl,
        teacherId: request.userData.teacherId
    }


    try {
        const reportCreated = await googleSheetsService.save(
            report,
            request.sheetsClientData.authorizationToken
        )

        if (reportCreated.updates.updatedRows > 0) {
            return response.status(200).send({
                message: 'REPORT CREATED'
            })
        }

        response.status(401).send({
            message: "REPORT CREATED FAIL",
        });

    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
}


module.exports.getReportsUnConfirm = async function (request, response) {
    try {
        const reports = await googleSheetsService.findReports(
            request.userData.teacherId,
            request.sheetsClientData.authorizationToken
        )

        return response.status(200).send(reports)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
}