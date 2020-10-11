const googleSheetsService = require("../services/google-sheets");
const { sendMail } = require("../send-email/transporter");
const { confirmCode } = require("../services/confirm-code");
const { sendEmailConfirmCodeOptions } = require('../services/emails')
const { createToken } = require('../services/tokens')
const keys = require("../config/keys");



exports.authTeacherId = async function (request, response) {
    const { teacherId } = request.body

    try {
        const teacher = await googleSheetsService.findTeacherById(
            teacherId,
            request.googleSheetsApi
        )

        // console.log(teacher)
        if (!teacher) {
            return response.status(403).send({
                message: 'USER NOT FOUND'
            })
        }

        const options = sendEmailConfirmCodeOptions(teacher.email, confirmCode.getConfirmCode())

        // make error respone possiblle
        sendMail(options, (error, success) => {
            if (success) {
                confirmCode.setTimeExpireConfirmCode()

                const token = createToken({
                    teacherEmail: teacher.email
                })

                return response.status(200).send({
                    message: 'USER FOUND',
                    token: token,
                    user: teacher,
                    tokenExpiresIn: keys.TOKENS.ACCESS_TOKEN.expiresIn,
                    confirmCodeExpire: 60 * 2
                })
            }

            response.status(403).send({
                message: 'EMAIL UNKNOW'
            })

        })

    } catch (error) {
        // console.log('ERROR')
        // console.log(error)
        response.status(500).send({
            message: 'ERROR UNKNOW'
        })
    }

}



exports.authConfirmCode = async function (request, response) {
    const { code } = request.body

    if (code == confirmCode.getConfirmCode()) {
        console.log('CODE IS CONFIRM')
        confirmCode.deleteConfirmCode()
        return response.status(200).send({
            message: 'User log',
            isLog: true
        })
    }

    response.status(403).send({
        message: 'Wrong code'
    })


};


exports.newConfirmCode = async function (request, response) {
    const { teacherEmail } = request.userData

    confirmCode.createConfirmCode()
    // console.log(confirmCode.getConfirmCode())

    const options = sendEmailConfirmCodeOptions(teacherEmail, confirmCode.getConfirmCode())

    sendMail(options, (error, success) => {
        if (success) {
            confirmCode.setTimeExpireConfirmCode()

            return response.status(200).send({
                message: 'NEW CONFIRM CODE CREATED',
                confirmCodeExpire: 60 * 2
            })
        }

        response.status(403).send({
            message: 'EMAIL UNKNOW'
        })

    })
}
