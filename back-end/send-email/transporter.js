const sendGrid = require('@sendgrid/mail')
const nodemailer = require('nodemailer')
const sendGridTransporter = require('nodemailer-sendgrid-transport')
const keys = require('../config/keys')


function sendMail(options) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: keys.EMAIL_SENDER.auth.user,
            pass: keys.EMAIL_SENDER.auth.pass
        }
    })
    transporter.sendMail(options, (error, info) => {
        if (error) {
            console.log(error)
        }

        console.log(info)
    })

}

module.exports = {
    sendMail
}
