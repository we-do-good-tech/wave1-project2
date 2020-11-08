const keys = require('../../config/keys')


function emailOptions(toEmail, { subject, text, html }) {
    return {
        from: keys.EMAIL_SENDER.auth.user,
        to: toEmail,
        subject: subject,
        text: text,
        html: html
    }
}

module.exports = {
    emailOptions,

}