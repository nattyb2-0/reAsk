const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('welcome to reAsk')
});

router.post('/:id', (req, res) => {
res.send('fuck you')
})


module.exports = router;
