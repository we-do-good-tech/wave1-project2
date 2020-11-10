module.exports = {
    studentsList: function (request, response, next) {
        const { studentsList } = request.session.user
        console.log('cache students')
        // console.log(request.session)
        if (studentsList.length > 0) {
            return response.status(200).send(studentsList)
        }

        next()
    },
    reporrsList: function (request, response, next) {
        const { reportsList } = request.session.user
        console.log('cache reports')
        // console.log(request.session)
        if (reportsList.length > 0) {
            return response.status(200).send(reportsList)
        }

        next()
    }
}