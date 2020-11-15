const router = require('express').Router()
const signControllers = require('../controllers/signature')
const { verifyTokenSign } = require('../middlewares/auth-sign-token')
const { authSeets } = require('../middlewares/auth-sheets')
const validators = require('../validators/validators')
const { validate } = require('../middlewares/validate')


router.post(
    '/verify/parent-token',
    [validators.stringProperty('token')],
    validate,
    verifyTokenSign,
    authSeets,
    signControllers.verifyLink
)

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