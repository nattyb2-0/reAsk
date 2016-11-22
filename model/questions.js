const db = require('.db');

function showAllQuestions(req, res, next) {
  console.log('stupid question')
  db.any('SELECT * FROM questions';)
    .then(questions => {
      res.questions = questions;
      next();
    })
    .catch(error => next(error));
}

function addQuestion(req, res, next) {
db.one(`INSERT INTO questions (username, votes, question_body, tag)
        VALUES ($username/, $/votes, $/question_body, $/tag)
        RETURNING *;
        `, req.body)
  .then(questions => {
    res.questions = questions;
    next();
  })
  .catch(error => next(error));
}

function upVoteQuestion(req, res, next) {
  db.none(`UPDATE questions
           SET votes = votes + 1
           WHERE id = ${req.params.id}`)
          .then(() => {
            next();
          })
          .catch(err => next(err))
}


module.exports = { showAllQuestions, addQuestion, upVoteQuestion };
