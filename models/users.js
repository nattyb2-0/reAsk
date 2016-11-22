
//this function will query the database and  get all the users that are students from user table
function showAllStudents(){
  db.any('SELECT * from users WHERE ;')
    .then((students) => {

      res.students = students;
      console.log(students);
      next();
    })
    .catch(error => next(error));
}
}

//this function will query the database and get all the users that are teachers
function showAllteachers(){
  db.any('SELECT * from users WHERE')
    .then((teachers) => {

      res.teachers = teachers;
      console.log(teachers);
      next();
    })
    .catch(error => next(error));
}
}

module.exports ={showAllteachers,showAllStudents};
