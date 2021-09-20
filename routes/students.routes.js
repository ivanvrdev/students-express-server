const router = require('express').Router();
const{allStudents, newStudent} = require('../controllers/students.controllers');

router.get('/students/all', allStudents);
router.post('/students/new', newStudent);

module.exports = router;