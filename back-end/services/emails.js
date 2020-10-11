const keys = require('../config/keys')


function sendEmailConfirmCodeOptions(toEmail, confirmCode) {
    return {
        from: keys.EMAIL_SENDER.auth.user,
        to: toEmail,
        subject: 'TEST',
        text: `TEST`,
        html: `<strong>${confirmCode}</strong>`
    }
}


module.exports = {
    sendEmailConfirmCodeOptions
}