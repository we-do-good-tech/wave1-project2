const router = require('express').Router()
const authControllers = require('../controllers/auth')
const { authSeets } = require('../middlewares/auth-sheets')
const { verifyToken } = require('../middlewares/auth-token')

router.post('/teacherId', authSeets, authControllers.authTeacherId)

router.get('/new-confirm-code', verifyToken, authControllers.newConfirmCode)

router.post('/teacher/confirm-code', verifyToken, authControllers.authConfirmCode)

module.exports = router;