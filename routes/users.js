const express      = require('express');
const userModel = require('../model/users.js')

const router  = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */
router.post('/', userModel.createUser, (req, res) => {
  res.redirect('/');
});


module.exports = router;
