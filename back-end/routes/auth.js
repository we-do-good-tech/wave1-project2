const router = require('express').Router()
const authControllers = require('../controllers/auth')
const { authSeets } = require('../middlewares/auth-sheets')
const validators = require('../validators/validators')
const { validate } = require('../middlewares/validate')
const { authSession } = require('../middlewares/auth-session')

router.post(
    '/teacherEmail',
    [validators.email('teacherEmail')],
    validate,
    authSeets,
    authControllers.authTeacherEmail
)

router.get(
    '/new-confirm-code',
    authSession,
    authControllers.newConfirmCode
)

router.post(
    '/teacher/confirm-code',
    [validators.confirmCode('code')],
    validate,
    authSession,
    authControllers.authConfirmCode
)

module.exports = router;