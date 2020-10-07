class ConfirmCode {
  code = undefined;
  constructor() {
    // if (!this.code) {
    //   this.createConfirmCode();
    //   console.log("HAVE NO CODE");
    // }
    // console.log("HAVE CODE");
    // return this;
    this.createConfirmCode();
  }

  createConfirmCode() {
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += Math.floor(Math.random() * 9).toString();
    }
    this.code = code;
  }

  static getCode() {
    return this.code;
  }
}

module.exports = {
  ConfirmCode,
};
