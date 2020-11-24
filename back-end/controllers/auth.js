const googleSheetsService = require("../services/google-sheets");
const { sendMail } = require("../send-email/transporter");
const { ConfirmCode } = require("../services/confirm-code");
const { emailOptions } = require("../services/emails/emails.options");
const emailTamplate = require('../services/emails/email.tamplates')
const { createToken } = require("../services/tokens");
const keys = require("../config/keys");
const { convertSheetsDataToObjectsArray } = require('../helpers/tojson')



module.exports.authTeacherEmail = async function (request, response, next) {
    const { teacherEmail } = request.body;
    const query = `select A,B,C where C='${teacherEmail}'`;
    const sheetId = keys.GOOGLE_SHEETS.sheetsIds.teachers;

    try {
        const teacher = await googleSheetsService.find(
            query,
            sheetId,
            request.sheetsClientData.authorizationToken
        );


        if (!teacher) {
            return response.status(404).send({
                message: "משתמש לא נמצא",
            });
        }

        const toJson = convertSheetsDataToObjectsArray(teacher, 'TEACHERS')[0]

        const newCode = new ConfirmCode()

        const options = emailOptions(
            toJson.email,
            emailTamplate.confirmCode(newCode.getConfirmCode())
        );

        sendMail(options);

        request.session.user = {
            userId: toJson.id,
            email: toJson.email,
            firstName: toJson.firstName,
            confirmCode: newCode.getConfirmCode(),
            confirmCodeExpiresIn: new Date().getTime() + (keys.CONFIRM_CODE.expiresIn * 1000),
            studentsList: [],
            reportsList: []
        }

        return response.status(200).send({
            message: "USER FOUND",
            confirmCodeExpire: keys.CONFIRM_CODE.expiresIn,
        });
    } catch (error) {
        next(error)
    }
};


module.exports.authConfirmCode = async function (request, response, next) {
    const { code } = request.body;
    const { userId, email, firstName, confirmCode, confirmCodeExpiresIn } = request.session.user

    try {
        if (code === confirmCode && new Date().getTime() < confirmCodeExpiresIn) {
            console.log("CODE IS CONFIRM");
            const token = createToken({
                teacherId: userId,
            }, keys.TOKENS.ACCESS_TOKEN.secretTokenKey, keys.TOKENS.ACCESS_TOKEN.expiresIn);

            return response.status(200).send({
                message: "User log",
                isLog: true,
                token: token,
                tokenExpiresIn: keys.TOKENS.ACCESS_TOKEN.expiresIn,
                userName: firstName
            });
        }

        response.status(402).send({
            message: "קוד שגוי, נסה שנית",
        });
    } catch (error) {
        next(error)
    }

};


module.exports.newConfirmCode = async function (request, response, next) {

    const { email } = request.session.user

    try {
        const newCode = new ConfirmCode()

        const options = emailOptions(
            email,
            emailTamplate.confirmCode(newCode.getConfirmCode())
        );

        request.session.user.confirmCode = newCode.getConfirmCode()
        request.session.user.confirmCodeExpiresIn = new Date().getTime() + (keys.CONFIRM_CODE.expiresIn * 1000)

        sendMail(options)

        response.status(200).send({
            message: "נשלח קוד חדש",
            confirmCodeExpire: keys.CONFIRM_CODE.expiresIn,
        });

    } catch (error) {
        next(error)
    }

};




