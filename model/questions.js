const db = require('.db');

function showAllQuestions(req, res, next) {
  db.any('SELECT * FROM questions';)
    .then(questions => {
      res.questions = questions;
      next();
    })
    .catch(error => next(error));
}



module.exports = { showAllQuestions }
