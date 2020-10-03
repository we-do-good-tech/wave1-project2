const googleSheetsService = require('../services/google-sheets')


exports.authTeacherId = async function (request, response) {
    const { teacherId } = request.body

    try {
        googleSheetsService.findTeacherById(teacherId, (teacher) => {
            if (teacher) {
                return response.status(200).send({
                    message: 'USER FOUND',
                    user: teacher
                })
            }
            response.status(403).send({
                message: 'USER NOT FOUND'
            })

        })
    } catch (error) {
        console.log('ERROR')
        console.log(error)
        response.status(500).send({
            message: 'ERROR UNKNOW'
        })
    }


}