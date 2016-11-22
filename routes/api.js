const express = require('express');
const router = express.Router();
const {showAllStudents,showAllTeachers} = require('../model/users');
const {showAllQuestions} = require('../model/questions')
// get request for data about students to api
router.get('/students', showAllStudents, (req, res) => {
  // res.send('the api route for students data  is set up...this will show all data for stucents')
   res.json(res.students|| []);
});

// get request for data about teachersto api
router.get('/teachers', showAllTeachers, (req, res) => {
  // res.send('the api route for teachers data  is set up...this will show all data for teachers')
    res.json(res.teachers|| []);
});


//get request for data about questions to api
router.get('/questions', showAllQuestions,(req, res) => {
  res.send('the api route for questions data  is set up, this will show all data for questions')
});




module.exports = router;
