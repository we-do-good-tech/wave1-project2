

class ConfirmCode {
    code
    constructor() {
        this.createConfirmCode()
    }

    createConfirmCode() {
        let code = ''
        for (let i = 0; i < 4; i++) {
            code += Math.floor(Math.random() * 9).toString()
        }
        this.code = code
    }


    getCode() {
        return this.code
    }

}


module.exports = {
    ConfirmCode
}