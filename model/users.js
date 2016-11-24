const db = require('./db');

//this function will query the database and  get all the users that are students from user table


function showAllStudents(req, res, next){
  db.any(`
    SELECT username, course, email, type
    FROM users
    WHERE type = 'student';
   `)
    .then((students) => {

      res.students = students;
      console.log(students);
      next();
    })
    .catch(error => next(error));
}

//this function will query the database and get all the users that are teachers
function showAllTeachers(req, res, next){
  db.any(`
    SELECT username, course, email, type
    FROM users
    WHERE type = 'teacher';
  `)
    .then((teachers) => {

      res.teachers = teachers;
      console.log(teachers);
      next();
    })
    .catch(error => next(error));
}

function createUser(req, res, next) {
  if (req.body.user.password === req.body.user.confirmpassword) {
    const userObject = {
      username: req.body.user.username,
      email: req.body.user.email,
      course: req.body.user.course,
      password: req.body.user.password
    };

      getDB().then((db) => {
        db.collection('users')
          .insert(userObject, (insertErr, dbUser) => {
            if (insertErr) return next(insertErr);

            res.user = dbUser;
            db.close();
            return next();
          });
      });
    } else {
      res.redirect('/')
    }
  }
// I commented this part part out taka...but im pretty sure you would have to do the insert in this way....
// the one above was for mongo db where you didnt have to be specific about input and data andyou could toss anything at it.
// function createUser(req, res, next) {
//   if (req.body.user.password === req.body.user.confirmpassword) {
//     const userObject = {
//       username: req.body.user.username,
//       email: req.body.user.email,
//       course: req.body.user.course,
//       password: req.body.user.password
//     };
//  getDB().then((db) => {
//     db.one(`INSERT INTO users (username, course, email, password, type) VALUES ($1, $2, $3, $4, $5);`,
//     [req.body.username, req.body.course, req.body.email, req.body.password, req.body.type])
//   .then((users) => {
//     res.users = users;
//     db.close();
//     next();
//   });
// })
// }else {
//   res.redirect('/')
// }
// }

module.exports = { showAllTeachers, showAllStudents, createUser };
