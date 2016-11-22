const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('the api route for get is set up')
});



module.exports = router;

