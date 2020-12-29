const keys = require('../config/keys')
const JsonWebToken = require('jsonwebtoken')
const { destroySession } = require('./auth-session')

/**
 * @param {*} request 
 * @param {*} response 
 * @param {*} next
 * verify token - authorize  user
 */
async function verifyToken(request, response, next) {

    try {
        const token = request.headers.authorization.split(' ')[1]

        const decodedToken = await JsonWebToken.verify(token, keys.TOKENS.ACCESS_TOKEN.secretTokenKey)
        // console.log(decodedToken, 'DECODE TOKEN')
        request.userData = {
            teacherId: decodedToken.teacherId,
            teacherEmail: decodedToken.teacherEmail,
            teacherFirstName: decodedToken.teacherFirstName,
        }

        Object.freeze(request.userData)

        next()

    } catch (error) {
        destroySession(request)
        console.log('Unauthorized user')
        response.status(401).send({
            message: 'Unauthorized',
        })
    }

}

module.exports = {
    verifyToken
}