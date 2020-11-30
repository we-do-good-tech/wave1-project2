const router = require('express').Router()
const teacherController = require('../controllers/teacher')
const { authSeets } = require('../middlewares/auth-sheets')
const { verifyToken } = require('../middlewares/auth-token')
const { findReport } = require('../middlewares/find-report')
const { validate } = require('../middlewares/validate')
const { authSession } = require('../middlewares/auth-session')
const cache = require('../middlewares/cache/cache')
const validators = require('../validators/validators')
const keys = require('../config/keys')

const limitReportsDays = 90
const limitResendSignDays = 1

router.get(
    '/students',
    authSession,
    verifyToken,
    cache.studentsList,
    authSeets,
    teacherController.getStudents
)

router.post(
    '/create-report',
    authSession,
    verifyToken,
    [
        validators.numberPropery('ticketNo'),
        validators.stringProperty('studentName'),
        validators.stringProperty('reportActivitis'),
        // validators.stringProperty('reportComments'),
        validators.email('parentEmail'),
        validators.datePropery(
            'reportDate',
            keys.CUSTOM_VALIDATORS_KEYS.dateLimit,
            limitReportsDays
        ),
        validators.timePropery(
            'reportStartTime',
            keys.CUSTOM_VALIDATORS_KEYS.timesRange
        ),
        validators.timePropery(
            'reportEndTime',
            keys.CUSTOM_VALIDATORS_KEYS.timesRange
        ),
        validators.timePropery(
            'reportRangeTimne',
            keys.CUSTOM_VALIDATORS_KEYS.range
        )
    ],
    validate,
    authSeets,
    findReport,
    teacherController.createReport
)

router.get(
    '/reports-unconfirm',
    authSession,
    verifyToken,
    cache.reporrsList,
    authSeets,
    teacherController.getReportsUnConfirm
)

router.get(
    '/reports/stats',
    authSession,
    verifyToken,
    authSeets,
    teacherController.getReportsStats
)


router.post(
    '/resend/parent-sign',
    authSession,
    verifyToken,
    [
        validators.numberPropery('ticketNo'),
        validators.stringProperty('studentName'),
        validators.email('parentEmail'),
        validators.numberPropery('index'),
        validators.datePropery('reportDate')
    ],
    validate,
    authSeets,
    findReport,
    teacherController.resendParentSign
)


module.exports = router