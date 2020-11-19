const router = require('express').Router()
const authControllers = require('../controllers/auth')
const { authSeets } = require('../middlewares/auth-sheets')
const validators = require('../validators/validators')
const { validate } = require('../middlewares/validate')
const { authSession } = require('../middlewares/auth-session')
const { limitter } = require('../services/rate-limiter')

const limitAuthEmailOptions = {

}



router.post(
    '/teacherEmail',
    // limitter(10 * 60 * 1000, 1, 'אחי מספיק לשלוח בקשות ,תבוא מחר'),
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
    limitter(10 * 60 * 1000 * 6, 10, 'אחי מספיק לשלוח קוד שגוי,תבוא מחר'),
    authSession,
    [validators.confirmCode('code')],
    validate,
    authControllers.authConfirmCode
)

module.exports = router;