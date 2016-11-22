const db = require('./db');
//this function will query the database and  get all the users that are students from user table
function showAllStudents(req,res,next){
  db.any(`SELECT * username, course, email, type
   FROM users
   WHERE type= 'student' ;
   `)
    .then((students) => {

      res.students = students;
      console.log(students);
      next();
    })
    .catch(error => next(error));
}


//this function will query the database and get all the users that are teachers
function showAllTeachers(req,res,next){
  db.any(`SELECT username, course, email, type
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


module.exports ={ showAllTeachers,showAllStudents };
