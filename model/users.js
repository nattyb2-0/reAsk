const db = require('./db');

function showAllUsers(req, res, next){
  db.any(`
    SELECT *
    FROM users;
   `)
    .then((users) => {

      res.users = users;
      console.log(users);
      next();
    })
    .catch(error => next(error));
}



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
    db.none(`
      INSERT INTO users(username, email, course, password)
      VALUES ('${userObject.username}', '${userObject.email}', '${userObject.course}', '${userObject.password}');
      `)
      .then((newUser) => {
        res.newUser = newUser;
        next()
      })
      .catch(error => next(error));
    } else {
      res.redirect('/')
    }
  }


module.exports = { showAllUsers, showAllTeachers, showAllStudents, createUser };
