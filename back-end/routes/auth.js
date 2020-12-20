const router = require('express').Router()
const authControllers = require('../controllers/auth')
const { authSeets } = require('../middlewares/auth-sheets')
const validators = require('../validators/validators')
const { validate } = require('../middlewares/validate')
const { authSession } = require('../middlewares/auth-session')
const { limitter } = require('../services/rate-limiter')


const authEmailLimitsOptions = {
    windowMs: 15 * 60 * 1000,
    max: 7,
    message: 'יותר מידי נסיונות  נסה מאוחר יותר'
}

const authConfirmCodeOptions = {
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: 'יותר מידי נסיונות  נסה מאוחר יותר'
}


router.post(
    '/teacherEmail',
    limitter(authEmailLimitsOptions),
    [validators.email('teacherEmail')],
    validate,
    authSeets,
    authControllers.authTeacherEmail
)

router.get(
    '/new-confirm-code',
    limitter(authConfirmCodeOptions),
    authSession,
    authControllers.newConfirmCode
)

router.post(
    '/confirm-code',
    limitter(authConfirmCodeOptions),
    authSession,
    [validators.confirmCode('code')],
    validate,
    authControllers.authConfirmCode
)

module.exports = router;