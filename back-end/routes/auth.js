const router = require('express').Router()
const authControllers = require('../controllers/auth')
const { authSeets } = require('../middlewares/auth-sheets')
const validators = require('../validators/validators')
const { validate } = require('../middlewares/validate')

router.post(
    '/teacherEmail',
    [validators.email('teacherEmail')],
    validate,
    authSeets,
    authControllers.authTeacherEmail
)

router.post(
    '/new-confirm-code',
    [validators.email('teacherEmail')],
    validate,
    authControllers.newConfirmCode
)

router.post(
    '/teacher/confirm-code',
    [
        validators.confirmCode('code'),
        validators.numberPropery('userId')
    ],
    validate,
    authControllers.authConfirmCode
)

module.exports = router;