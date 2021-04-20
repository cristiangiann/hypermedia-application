'use strict';

let sqlDb;
var personTable = "lemonpeel\.person"

exports.personDbSetup = function(connection) {
  sqlDb = connection;
  console.log("Checking if " + personTable + " table exists");
  return sqlDb.schema.hasTable(personTable).then(exists => {
    if(!exists) {
      console.log(personTable + " table does not exists");
      return false;
    }else{
      console.log(personTable + " table exists");
    }
  });
};

/**
 * List of people
 * All the people who held at least a course
 *
 * returns List
 **/
exports.peopleGET = function() {
  return sqlDb(personTable)
    .select('id', 'name', 'surname', 'image_path')
    .then(data => {
      console.log(data);
      return data;
    });
}

/**
 * Gets a person by id
 * Gets all the information about the selected teacher
 *
 * id Long Person ID
 * returns Person
 **/
exports.completePersonByIdGET = function(id) {
  return sqlDb(personTable)
    .where('lemonpeel\.person.id', id)
    .select('lemonpeel\.person.id', 'lemonpeel\.person.name', 'lemonpeel\.person.surname', 'lemonpeel\.person.biography', 'lemonpeel\.person.telephone', 'lemonpeel\.person.email', 'lemonpeel\.person.image_path')
    .then(results => {
      if(results.length == 0) return {};
      return results[0];
    })
}

/**
 * Gets a person by id
 * Gets basic information about the selected person
 *
 * id Long Person ID
 * returns Person preview
 **/
exports.personByIdGET = function(id) {
  return sqlDb(personTable)
    .where('id', id)
    .select('id', 'name', 'surname', 'image_path')
    .then(results => {
      if(results.length == 0) return {};
      return results[0];
    });
}

/**
 * Gets people by Course id
 * Gets basic information about the people who teach a specific course
 *
 * id Long Course ID
 * returns List
 **/
exports.peopleByCourseIdGET = function(courseId) {
  return sqlDb('lemonpeel\.course_instructor')
    .where('course_id', courseId)
    .leftJoin('lemonpeel\.person', 'lemonpeel\.course_instructor.person_id', '=', 'lemonpeel\.person.id')
    .select('lemonpeel\.person.id', 'lemonpeel\.person.image_path', 'lemonpeel\.person.name', 'lemonpeel\.person.surname')
}
