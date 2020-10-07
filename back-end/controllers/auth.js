const googleSheetsService = require("../services/google-sheets");
const { sendMail } = require("../send-email/transporter");
const { ConfirmCode } = require("../services/confirm-code");
const keys = require("../config/keys");

exports.authTeacherId = async function (request, response) {
  const { teacherId } = request.body;

  try {
    const teacher = await googleSheetsService.findTeacherById(
      teacherId,
      request.googleSheetsApi
    );

    if (!teacher) {
      return response.status(403).send({
        message: "USER NOT FOUND",
      });
    }

    const confirmCode = new ConfirmCode();

    let options = {
      from: keys.EMAIL_SENDER.auth.user,
      to: teacher.email,
      subject: "TEST",
      text: `TEST`,
      html: `<strong>${ConfirmCode.getCode()}</strong>`,
    };

    sendMail(options);

    response.status(200).send({
      message: "USER FOUND",
      user: teacher,
    });
  } catch (error) {
    // console.log('ERROR')
    // console.log(error)
    response.status(500).send({
      message: "ERROR UNKNOW",
    });
  }
};

exports.authConfirmCode = async function (request, response) {
  const { code } = request.body;

  // const confirmCode = new ConfirmCode()

  console.log(ConfirmCode.getCode());

  response.status(200).send({
    isLog: true,
  });
};
