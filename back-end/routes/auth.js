const router = require('express').Router()
const authControllers = require('../controllers/auth')
const { authSeets } = require('../middlewares/auth-sheets')

router.post('/teacherId', authSeets, authControllers.authTeacherId)

router.post('/teacher/confirm-code', authControllers.authConfirmCode)

module.exports = router;