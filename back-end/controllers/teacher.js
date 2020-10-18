const googleSheetsService = require("../services/google-sheets");
const keys = require("../config/keys");

module.exports.getStudents = async function (request, response) {

    try {
        const sdudents = await googleSheetsService.findStudents(
            request.userData.teacherId,
            request.authorizationToken
        )

        console.log(sdudents)

        response.status(200).send(sdudents)
    } catch (error) {
        console.log(error)
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
}


module.exports.createReport = async function (request, response) {
    console.log(request.body)

    response.send('ok')
}