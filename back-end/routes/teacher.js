const router = require('express').Router()
const teacherController = require('../controllers/teacher')
const { authSeets } = require('../middlewares/auth-sheets')
const { verifyToken } = require('../middlewares/auth-token')
const { findReport } = require('../middlewares/find-report')


router.get(
    '/students',
    verifyToken,
    authSeets,
    teacherController.getStudents
)

router.post(
    '/create-report',
    verifyToken,
    authSeets,
    findReport,
    teacherController.createReport
)

router.get(
    '/reports-unconfirm',
    verifyToken,
    authSeets,
    teacherController.getReportsUnConfirm
)

router.get(
    '/reports/stats',
    verifyToken,
    authSeets,
    teacherController.getReportsStats
)

router.post(
    '/resend/parent-sign',
    verifyToken,
    authSeets,
    findReport,
    teacherController.resendParentSign
)


module.exports = router