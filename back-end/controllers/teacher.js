const googleSheetsService = require("../services/google-sheets");
const keys = require("../config/keys");
const { convertSheetsDataToObjectsArray } = require('../helpers/tojson');
const { sendEmailSignConfirmMeeting } = require('../services/emails')
const { sendMail } = require("../send-email/transporter");
const { formatDate } = require('../helpers/dates.ranges')
const { createToken } = require('../services/tokens')



module.exports.getStudents = async function (request, response) {
    const query = `select * where F=${Number(request.userData.teacherId)}`;
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.childrens

    try {
        const sdudents = await googleSheetsService.find(
            query,
            sheetId,
            request.sheetsClientData.authorizationToken,
        )

        if (!sdudents) {
            return response.status(200).send([]);
        }

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
    if (request.findReport) {
        console.log(request.findReport)
        return response.status(400).send({
            message: 'דיווח לא חוקי יתכן שבוצע דיווח כפול ליום זה'
        })
    }
    const { studentName, ticketNo, reportDate, reportActivitis, reportComments, reportStartTime, reportEndTime, reportRangeTimne, parentEmail } = request.body

    let body = `{"values":[
        [
            "${reportDate}",
            "${reportStartTime}",
            "${reportEndTime}",
            "${reportRangeTimne}",
            "${reportActivitis}",
            "${reportComments}",
            ${false},
            ${null},
            "${ticketNo}",
            "${request.userData.teacherId}",
            "${new Date(reportDate).getMonth() + 1}",
            "${new Date().toDateString()}"
        ]
    ]}`


    try {
        const reportCreated = await googleSheetsService.save(
            body,
            keys.GOOGLE_SHEETS.sheetsNames.reports,
            request.sheetsClientData.authorizationToken
        )


        if (reportCreated.updates.updatedRows > 0) {

            const token = createToken({
                studentName: studentName,
                ticketNo: ticketNo,
                reportDate: reportDate,
                reportActivitis: reportActivitis,
                reportComments: reportComments,
                reportStartTime: reportStartTime,
                reportEndTime: reportEndTime,
                reportRangeTimne: reportRangeTimne,
                index: reportCreated.updates.updatedRange.replace(/\D/g, "").slice(0, 1)
            },
                keys.TOKENS.PARENT_SIGN_ACCESS_TOKEN.secretTokenKey,
                keys.TOKENS.PARENT_SIGN_ACCESS_TOKEN.expiresIn
            )

            const options = sendEmailSignConfirmMeeting(parentEmail, token)
            sendMail(options)
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
    const query = `select A,B,C,D,E,F,I,L,M where J=${Number(request.userData.teacherId)}and G=${false}`;

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
        // console.log(toJson)

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
        // console.log(toJson)
        response.status(200).send(toJson);
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
}


module.exports.resendParentSign = async function (request, response) {
    console.log(request.findReport)
    if (!request.findReport) {
        return response.status(404).send({
            message: "INVALID REPORT",
        });

    }
    // check date resend 

    const { studentName, ticketNo, reportDate, reportActivitis, reportComments, reportStartTime, reportEndTime, reportRangeTimne } = request.findReport
    const { parentEmail, index } = request.body


    const sheetName = keys.GOOGLE_SHEETS.sheetsNames.reports
    const range = `!L${index + 1}`

    let body = `{"values":[
            [
                "${new Date().toDateString()}"
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
            const token = createToken({
                studentName: studentName,
                ticketNo: ticketNo,
                reportDate: reportDate,
                reportActivitis: reportActivitis,
                reportComments: reportComments,
                reportStartTime: reportStartTime,
                reportEndTime: reportEndTime,
                reportRangeTimne: reportRangeTimne,
                index: index + 1
            },
                keys.TOKENS.PARENT_SIGN_ACCESS_TOKEN.secretTokenKey,
                keys.TOKENS.PARENT_SIGN_ACCESS_TOKEN.expiresIn
            )

            const options = sendEmailSignConfirmMeeting(parentEmail, token)
            sendMail(options)
            return response.status(200).send({
                message: 'UPDATE RESEND DATE PARENT SIGN'
            })
        }

        response.status(401).send({
            message: "UPDATE RESEND SIGN PARENT FAIL",
        });

    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }

}