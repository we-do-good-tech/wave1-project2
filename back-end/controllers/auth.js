const googleSheetsService = require("../services/google-sheets");

exports.authTeacherId = async function (request, response) {
  const { teacherId } = request.body;

  try {
    googleSheetsService.findTeacherById(teacherId, (teacher) => {
      console.log(teacher);
      if (teacher) {
        return response.status(200).send({
          message: "USER FOUND",
          teacher: teacher,
        });
      }
      response.status(403).send({
        message: "משתמש לא נמצא",
      });
    });
  } catch (error) {
    console.log("ERROR");
    console.log(error);
    response.status(500).send({
      message: "ERROR UNKNOW",
    });
  }
};

// עשיתי עם קולבקים משהו יפה
// זה של מןנגו findTeacherById?   איזה מונגו חח זה פונקציה שאני עישתי
// יש משהו דומה חחח איפה הפונקצחה?
// כן אבל אין לנו פה שום מונגו חח  אני פשוט קראתי לזה ככה שיהיהי ברור
// איפה הפונקציה?  עשיתי סווסירס לגוגל סישטס הכל שם
