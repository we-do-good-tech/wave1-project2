function createConfirmCode() {
    let code = ''
    for (let i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 9).toString()
    }
    return code
}

module.exports = {
    createConfirmCode
}