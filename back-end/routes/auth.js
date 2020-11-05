const router = require('express').Router()
const authControllers = require('../controllers/auth')
const { authSeets } = require('../middlewares/auth-sheets')
const { verifyToken } = require('../middlewares/auth-token')
const validators = require('../validators/validators')
const { validate } = require('../middlewares/validate')

router.post(
    '/teacherEmail',
    [validators.email('teacherEmail')],
    validate,
    authSeets,
    authControllers.authTeacherEmail
)

router.get(
    '/new-confirm-code',
    verifyToken,
    authControllers.newConfirmCode
)

router.post(
    '/teacher/confirm-code',
    [validators.confirmCode('code')],
    validate,
    verifyToken,
    authControllers.authConfirmCode
)

module.exports = router;