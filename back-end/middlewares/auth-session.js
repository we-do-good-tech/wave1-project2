function authSession(request, response, next) {
    if (!request.sessionID) {
        return response.status(401).send({
            message: 'Unauthorized'
        })
    }
    next()
}

module.exports = {
    authSession
}