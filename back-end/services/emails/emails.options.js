const keys = require('../../config/keys')


function sendEmailConfirmCodeOptions(toEmail, confirmCode) {
    return {
        from: keys.EMAIL_SENDER.auth.user,
        to: toEmail,
        subject: 'TEST',
        text: `TEST`,
        html: `<strong>${confirmCode}</strong>`
    }
}


function sendEmailSignConfirmMeeting(toEmail, token) {
    return {
        from: keys.EMAIL_SENDER.auth.user,
        to: toEmail,
        subject: 'TEST',
        text: 'TEST',
        // html: `<a href="http://localhost:3000/confirm-report/parent-signature/${token}">כאן</a> לאשר את המפש נא ללחוץ`
        html: `<a href="https://mashlimim.herokuapp.com/confirm-report/parent-signature/${token}">כאן</a> לאשר את המפש נא ללחוץ`
    }
}


// html: `<a href="https://mashlimim.herokuapp.com/confirm-report/parent-signature/${token}">כאן</a> לאשר את המפש נא ללחוץ`


module.exports = {
    sendEmailConfirmCodeOptions,
    sendEmailSignConfirmMeeting
}