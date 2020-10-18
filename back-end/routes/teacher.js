const router = require('express').Router()
const teacherController = require('../controllers/teacher')
const { authSeets } = require('../middlewares/auth-sheets')
const { verifyToken } = require('../middlewares/auth-token')


router.get('/students', authSeets, verifyToken, teacherController.getStudents)



module.exports = router