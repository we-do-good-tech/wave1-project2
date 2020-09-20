const router = require('express').Router()
const teacerControllers = require('../controllers/teacher')

// Admin
// router.get('/admin/admin/all', userController.admin.all);
// router.post('/admin/admin/add');
// router.post('/admin/admin/register');
// router.get('/admin/teacher/all');
// router.get('/admin/teacher/search');
// router.post('/admin/teacher/add');
// router.post('/admin/teacher/update');
// router.post('/admin/teacher/delete');
// router.get('/admin/student/all');
// router.get('/admin/student/search');
// router.post('/admin/student/add');
// router.post('/admin/student/update');
// router.post('/admin/student/delete');
// Teacher
router.get('/students');
router.post('/register');
router.post('/update-student');
router.post('/add-meet');
// Meetings
router.get('/meetings');

module.exports = router