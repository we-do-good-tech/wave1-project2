class ConfirmCode {
    constructor() {
        if (!this.instance) {
            ConfirmCode.instance = this;
        }

        return ConfirmCode.instance;
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

    setTimeExpireConfirmCode() {
        setTimeout(() => {
            this.deleteConfirmCode()
            console.log(this.code, 'EXPIRED TIME CONFIRM CODE')
        }, 1000 * 120);
    }
}

const confirmCode = new ConfirmCode();
// Object.freeze(confirmCode);

module.exports = {
    confirmCode,
};








