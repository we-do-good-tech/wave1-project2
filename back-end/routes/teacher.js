const router = require('express').Router()
const teacherController = require('../controllers/teacher')
const { authSeets } = require('../middlewares/auth-sheets')
const { verifyToken } = require('../middlewares/auth-token')


router.get('/students', verifyToken, authSeets, teacherController.getStudents)


router.post('/create-report', verifyToken, authSeets, teacherController.createReport)



module.exports = router