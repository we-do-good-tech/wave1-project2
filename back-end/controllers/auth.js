const googleSheetsService = require("../services/google-sheets");
const { sendMail } = require("../send-email/transporter");
const { confirmCode } = require("../services/confirm-code");
const { sendEmailConfirmCodeOptions } = require("../services/emails");
const { createToken } = require("../services/tokens");
const keys = require("../config/keys");
const { convertSheetsDataToObjectsArray } = require('../helpers/tojson')


exports.authTeacherEmail = async function (request, response) {
    const { teacherEmail } = request.body;
    const query = `select * where C='${teacherEmail}'`;
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.teachers

    try {
        const teacher = await googleSheetsService.find(
            query,
            sheetId,
            request.sheetsClientData.authorizationToken
        );

        console.log(teacher);
        if (!teacher) {
            return response.status(404).send({
                message: "משתמש לא נמצא",
            });
        }

        const toJson = convertSheetsDataToObjectsArray(teacher, 'TEACHERS')[0]

        confirmCode.createConfirmCode();

        const options = sendEmailConfirmCodeOptions(
            toJson.email,
            confirmCode.getConfirmCode()
        );

        // make error respone possiblle
        sendMail(options);

        confirmCode.setTimeExpireConfirmCode();

        const token = createToken({
            teacherId: toJson.id,
            teacherEmail: toJson.email,
            teacherFirstName: toJson.firstName,
        }, keys.TOKENS.ACCESS_TOKEN.secretTokenKey, keys.TOKENS.ACCESS_TOKEN.expiresIn);

        return response.status(200).send({
            message: "USER FOUND",
            token: token,
            tokenExpiresIn: keys.TOKENS.ACCESS_TOKEN.expiresIn,
            confirmCodeExpire: 60 * 2,
            userName: {
                firstName: toJson.firstName,
            },
        });
    } catch (error) {
        console.log(error);
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
};

exports.authConfirmCode = async function (request, response) {
    const { code } = request.body;
    // console.log(code, confirmCode.getConfirmCode())

    if (code === confirmCode.getConfirmCode()) {
        console.log("CODE IS CONFIRM");
        confirmCode.deleteConfirmCode();
        return response.status(200).send({
            message: "User log",
            isLog: true,
        });
    }

    response.status(401).send({
        message: "קוד שגוי, נסה שנית",
    });
};


exports.newConfirmCode = async function (request, response) {
    const { teacherEmail } = request.userData;

    confirmCode.createConfirmCode();

    const options = sendEmailConfirmCodeOptions(
        teacherEmail,
        confirmCode.getConfirmCode()
    );

    sendMail(options)

    confirmCode.setTimeExpireConfirmCode();

    return response.status(200).send({
        message: "נשלח קוד חדש",
        confirmCodeExpire: 60 * 2,
    });
};




