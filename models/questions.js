//this function will query the database and get all the data from the question table
function showAllQuestions(){
  db.any('SELECT * from tableName')
    .then((tableName) => {

      res.tableName = allQuestions;
      console.log(allQuestions);
      next();
    })
    .catch(error => next(error));
};

//this function will add users vote for question to database
function addvote(){
   db.one('INSERT INTO tableName (vote) VALUES ($1);',
    [req.body.vote])
  .then((vote) => {
    res.vote= vote;
    next();
  })
  .catch(error => next(error));

}
// ///this function will query the database and sort the data by the amount of votes
// function showQuestionsByVote(){

// };


// // this function will query the database and sort the data by date or timestamp created
// function showByNewest(){

// }




