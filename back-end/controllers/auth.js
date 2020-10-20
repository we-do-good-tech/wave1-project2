const googleSheetsService = require("../services/google-sheets");
const { sendMail } = require("../send-email/transporter");
const { confirmCode } = require("../services/confirm-code");
const { sendEmailConfirmCodeOptions } = require("../services/emails");
const { createToken } = require("../services/tokens");
const keys = require("../config/keys");

exports.authTeacherId = async function (request, response) {
    const { teacherEmail } = request.body;

    try {
        const teacher = await googleSheetsService.findTeacherByEmail(
            teacherEmail,
            request.sheetsClientData.authorizationToken
        );

        console.log(teacher);
        if (!teacher) {
            return response.status(403).send({
                message: "משתמש לא נמצא",
            });
        }

        confirmCode.createConfirmCode();

        const options = sendEmailConfirmCodeOptions(
            teacher.email,
            confirmCode.getConfirmCode()
        );

        // make error respone possiblle
        sendMail(options);

        confirmCode.setTimeExpireConfirmCode();

        const token = createToken({
            teacherId: teacher.id,
            teacherEmail: teacher.email,
            teacherFirstName: teacher.firstName,
        });

        return response.status(200).send({
            message: "USER FOUND",
            token: token,
            tokenExpiresIn: keys.TOKENS.ACCESS_TOKEN.expiresIn,
            confirmCodeExpire: 60 * 2,
            userName: {
                firstName: teacher.firstName,
            },
        });
    } catch (error) {
        // console.log('ERROR')
        console.log(error);
        response.status(500).send({
            message: "ERROR UNKNOW",
        });
    }
};

exports.authConfirmCode = async function (request, response) {
    const { code } = request.body;

    if (code == confirmCode.getConfirmCode()) {
        console.log("CODE IS CONFIRM");
        confirmCode.deleteConfirmCode();
        return response.status(200).send({
            message: "User log",
            isLog: true,
        });
    }

    response.status(403).send({
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

    sendMail(options, (error, success) => {
        if (success) {
            confirmCode.setTimeExpireConfirmCode();

            return response.status(200).send({
                message: "נשלח קוד חדש",
                confirmCodeExpire: 60 * 2,
            });
        }

        response.status(403).send({
            message: "EMAIL UNKNOW",
        });
    });
};
