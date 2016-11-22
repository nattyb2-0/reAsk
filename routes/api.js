const express = require('express');
const router = express.Router();

// get request for data about students to api
router.get('/students', (req, res) => {
  res.send('the api route for students data  is set up...this will show all data for stucents')
});

// get request for data about teachersto api
router.get('/teachers', (req, res) => {
  res.send('the api route for teachers data  is set up...this will show all data for teachers')
});


//get request for data about questions to api
router.get('/questions', (req, res) => {
  res.send('the api route for questions data  is set up, this will show all data for questions')
});




module.exports = router;
