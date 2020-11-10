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
    '/confirm-code',
    authSession,
    [validators.confirmCode('code')],
    validate,
    authControllers.authConfirmCode
)

module.exports = router;