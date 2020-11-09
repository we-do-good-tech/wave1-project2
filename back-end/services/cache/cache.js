module.exports = {
    studentsList: function (request, response, next) {
        if (request.session.user.studentsList) {
            console.log('cache students')
            return response.status(200).send(request.session.user.studentsList)
        }

        next()
    }
}