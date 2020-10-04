const googleSheetsService = require('../services/google-sheets')


exports.authTeacherId = async function (request, response) {
    const { teacherId } = request.body

    try {
        googleSheetsService.findTeacherById(teacherId, (error, teacher) => {
            if (!teacher) {
                return response.status(403).send({
                    message: 'USER NOT FOUND'
                })
            }
            response.status(200).send({
                message: 'USER FOUND',
                user: teacher
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