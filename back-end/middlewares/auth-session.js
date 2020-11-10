function authSession(request, response, next) {
    // console.log(request.session.user)
    if (!request.session.user) {
        console.log('MIDDELE WERE SESSION')
        return response.status(401).send({
            message: 'Unauthorized'
        })
    }
    next()
}

module.exports = {
    authSession
}