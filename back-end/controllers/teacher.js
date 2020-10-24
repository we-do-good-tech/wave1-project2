const googleSheetsService = require("../services/google-sheets");
const keys = require("../config/keys");
const { convertSheetsDataToObjectsArray } = require('../helpers/tojson');




module.exports.getStudents = async function (request, response) {
    const query = `select * where F=${Number(request.userData.teacherId)}`;
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.childrens

    try {
        const sdudents = await googleSheetsService.find(
            query,
            sheetId,
            request.sheetsClientData.authorizationToken,
        )

        const toJson = convertSheetsDataToObjectsArray(sdudents, 'CHILDRENS')
        response.status(200).send(toJson)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
}


module.exports.createReport = async function (request, response) {
    const { ticketNo, reportDate, reportActivitis, reportComments, reportStartTime, reportEndTime, reportRangeTimne, isParentSign, parentSignImageUrl } = request.body

    let body = `{"values":[
        [
            "${reportDate}",
            "${reportStartTime}",
            "${reportEndTime}",
            "${reportRangeTimne}",
            "${reportActivitis}",
            "${reportComments}",
            ${isParentSign},
            ${parentSignImageUrl},
            "${ticketNo}",
            "${request.userData.teacherId}",
            "${new Date(reportDate).getMonth() + 1}"
        ]
    ]}`


    try {
        const reportCreated = await googleSheetsService.save(
            body,
            keys.GOOGLE_SHEETS.sheetsNames.reports,
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
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.reports
    const query = `select A,B,C,D,E,F,I where J=${Number(request.userData.teacherId)}and G=${false}`;

    try {
        const reports = await googleSheetsService.find(
            query,
            sheetId,
            request.sheetsClientData.authorizationToken
        )

        if (!reports) {
            return response.status(200).send([]);
        }

        const toJson = convertSheetsDataToObjectsArray(reports, 'REPORTS')

        return response.status(200).send(toJson)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
}


module.exports.getReportsStats = async function (request, response) {
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.stats
    const qurey = `select B,C,D where A=${Number(request.userData.teacherId)}`

    try {
        const repostsStats = await googleSheetsService.find(
            qurey,
            sheetId,
            request.sheetsClientData.authorizationToken
        )

        const toJson = convertSheetsDataToObjectsArray(repostsStats, 'REPORTS_STATS')[0]
        console.log(toJson)
        // REPORTS_STATS
        response.status(200).send(toJson);
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
}