const express = require('express');
const router = express.Router();

//get request to our home route
router.get('/', (req, res) => {
  res.send('welcome to reAsk')
});

module.exports = router;
