const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('welcome to reAsk')
});

router.post('/:id', (req, res) => {

})

module.exports = router;
