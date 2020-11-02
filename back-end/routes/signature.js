const { request } = require('express')

const router = require('express').Router()
const signControllers = require('../controllers/signature')


router.post(
    '/verify/parent-token',
    signControllers.verifyToken
)


module.exports = router