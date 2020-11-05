const router = require('express').Router()
const teacherController = require('../controllers/teacher')
const { authSeets } = require('../middlewares/auth-sheets')
const { verifyToken } = require('../middlewares/auth-token')
const { findReport } = require('../middlewares/find-report')
const { validate } = require('../middlewares/validate')
const validators = require('../validators/validators')
const keys = require('../config/keys')

router.get(
    '/students',
    verifyToken,
    authSeets,
    teacherController.getStudents
)

router.post(
    '/create-report',
    verifyToken,
    [
        validators.numberPropery('ticketNo'),
        validators.stringProperty('studentName'),
        validators.stringProperty('reportActivitis'),
        validators.stringProperty('reportComments'),
        validators.email('parentEmail'),
        validators.datePropery('reportDate', keys.CUSTOM_VALIDATORS_KEYS.dateLimit),
        validators.timePropery('reportStartTime', keys.CUSTOM_VALIDATORS_KEYS.timesRange),
        validators.timePropery('reportEndTime', keys.CUSTOM_VALIDATORS_KEYS.timesRange),
        validators.timePropery('reportRangeTimne', keys.CUSTOM_VALIDATORS_KEYS.range)
    ],
    validate,
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