const router = require('express').Router()
const authControllers = require('../controllers/auth')
const { authSeets } = require('../middlewares/auth-sheets')

router.post('/teacherId', authSeets, authControllers.authTeacherId)



module.exports = router;