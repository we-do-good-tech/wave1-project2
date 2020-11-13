function authSession(request, response, next) {
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