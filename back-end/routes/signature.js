const router = require('express').Router()
const signControllers = require('../controllers/signature')
const { verifyTokenSign } = require('../middlewares/auth-sign-token')
const { authSeets } = require('../middlewares/auth-sheets')
const validators = require('../validators/validators')
const { validate } = require('../middlewares/validate')

/** POST /api/sign/verify/parent-token - 
 * body: {token: string} auth link */
router.post(
    '/verify/parent-token',
    [validators.stringProperty('token')],
    validate,
    verifyTokenSign,
    authSeets,
    signControllers.verifyLink
)

/** POST /api/sign/parent - 
 * body: {singImageBase64: image-base-64, 
 *        token: string} send sign */
router.post(
    '/parent',
    [
        validators.imageBase64('singImageBase64'),
        validators.stringProperty('token')
    ],
    validate,
    verifyTokenSign,
    authSeets,
    signControllers.parentSign
)

module.exports = router