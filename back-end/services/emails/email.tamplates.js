module.exports = {
    confirmCode: function (code) {
        return `<strong>${code}</strong>`
    },
    parentSign: function (token) {
        return `<a href="http://localhost:3000/confirm-report/parent-signature/${token}">כאן</a> לאשר את המפש נא ללחוץ`
        // html: `<a href="https://mashlimim.herokuapp.com/confirm-report/parent-signature/${token}">כאן</a> לאשר את המפש נא ללחוץ`
    }
}