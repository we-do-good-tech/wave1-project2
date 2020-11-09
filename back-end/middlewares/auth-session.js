function authSession(request, response, next) {
    if (!request.sessionID) {
        return response.status(401).send({
            message: 'Unauthorized'
        })
    }
    console.log(request.session, request.sessionID)

    next()

}

module.exports = {
    authSession
}