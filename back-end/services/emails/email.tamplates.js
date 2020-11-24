module.exports = {
    confirmCode: function (code) {
        return {
            subject: 'TEST',
            text: 'TEST',
            html: `<strong>${code}</strong>`
        }
    },
    parentSign: function (token) {
        return {
            subject: 'TEST',
            text: 'TEST',
            // html: `<a href="http://localhost:3004/confirm-report/parent-signature/${token}">כאן</a> לאשר את המפש נא ללחוץ`
            html: `<a href="https://mashlimim.herokuapp.com/confirm-report/parent-signature/${token}">כאן</a> לאשר את המפש נא ללחוץ`
        }
    }
}