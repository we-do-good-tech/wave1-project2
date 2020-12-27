/**
 * confirm code
 */
class ConfirmCode {
    constructor(expireIn) {
        if (expireIn) {
            this.expireIn = expireIn
        }
        this.createConfirmCode()
    }

    createConfirmCode() {
        let code = "";
        for (let i = 0; i < 4; i++) {
            code += Math.floor(Math.random() * 9).toString();
        }
        this.code = code;
    }

    getConfirmCode() {
        return this.code;
    }

    deleteConfirmCode() {
        this.code = null
    }
}


module.exports = {
    ConfirmCode,
};








