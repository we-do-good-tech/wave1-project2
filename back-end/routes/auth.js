const router = require('express').Router()
const authControllers = require('../controllers/auth')

router.post('/teacherId', authControllers.authTeacherId)



module.exports = router;