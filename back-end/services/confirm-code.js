class ConfirmCode {
    constructor() {
        if (!this.instance) {
            // this.createConfirmCode();
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







// let mySingleThon = function () {
//     if (mySingleThon.instance) {
//         return mySingleThon.instance
//     }

//     mySingleThon.instance = this
// }

// mySingleThon.getInstance = function () {
//     return mySingleThon.instance || new mySingleThon()
// }

// mySingleThon.prototype.setName = function (name) {
//     this.name = name
// }

// mySingleThon.prototype.getName = function () {
//     return this.name
// }

// mySingleThon.prototype.deleteName = function () {
//     this.name = null
// }


// const x = mySingleThon.getInstance()
// const y = mySingleThon.getInstance()
// x.setName('avi')
// y.setName('pini')
// console.log(x.getName())
// console.log(y.getName())
// x.deleteName()
// console.log(x.getName())
// console.log(y.getName())
