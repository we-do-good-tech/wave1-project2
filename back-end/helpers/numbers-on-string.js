const MimeNode = require("nodemailer/lib/mime-node")

function findFirstNumberOnString(str) {
    return Number(str.split(':')[0].replace(/\D/g, ""))
}

module.exports = {
    findFirstNumberOnString
}