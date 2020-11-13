const router = require('express').Router()
const signControllers = require('../controllers/signature')
const { verifyTokenSign } = require('../middlewares/auth-sign-token')
const { authSeets } = require('../middlewares/auth-sheets')


//still need validatores
router.post(
    '/verify/parent-token',
    verifyTokenSign,
    signControllers.verifyLink
)

router.post(
    '/parent',
    verifyTokenSign,
    authSeets,
    signControllers.parentSign
)

module.exports = router