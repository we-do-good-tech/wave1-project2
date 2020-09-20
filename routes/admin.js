const router = require('express').Router()
const adminControllers = require('../controllers/admin')


router.get('/admin/all', adminControllers.admin.all);
router.post('/admin/add');
router.post('/admin/register');
router.get('/teacher/all');
router.get('/teacher/search');
router.post('/teacher/add');
router.post('/teacher/update');
router.post('/teacher/delete');
router.get('/student/all');
router.get('/student/search');
router.post('/student/add');
router.post('/student/update');
router.post('/student/delete');

module.exports = router