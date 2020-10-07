class ConfirmCode {
  constructor() {
    if (!this.instance) {
      this.code = this.createConfirmCode();
      ConfirmCode.instance = this;
    }

    return ConfirmCode.instance;
  }

  createConfirmCode() {
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += Math.floor(Math.random() * 9).toString();
    }
    return code;
  }

  getCode() {
    return this.code;
  }
}

const confirmCode = new ConfirmCode();
Object.freeze(confirmCode);

module.exports = {
  confirmCode,
};
