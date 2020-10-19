const keys = require('../config/keys')
const JsonWebToken = require('jsonwebtoken')

async function verifyToken(request, response, next) {


    try {
        console.log('AUTH TOKEN MIDDLEWERE')
        const token = request.headers.authorization.split(' ')[1]

        const decodedToken = await JsonWebToken.verify(token, keys.TOKENS.ACCESS_TOKEN.secretTokenKey)

        request.userData = {
            teacherId: decodedToken.teacherId,
            teacherEmail: decodedToken.teacherEmail,
            teacherFirstName: decodedToken.teacherFirstName,
        }

        next()

    } catch (error) {
        response.status(401).send({
            message: 'Unauthorized',
        })
    }

}

module.exports = {
    verifyToken
}