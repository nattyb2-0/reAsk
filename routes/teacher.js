const express = require('express');
const router = express.Router();

// get request for data about students to api
router.get('/', (req, res) => {
  res.send('this is the route that will render the teachers view')
});

module.exports = router;
