const router = require('express').Router()
const userController = require('../controllers/teacher')
router.get('/students');
router.post('/register');
router.post('/update-student');
router.post('/add-meet');

module.exports = router