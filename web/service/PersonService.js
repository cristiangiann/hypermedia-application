'use strict';

let sqlDb;
var personTable = "Person"

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
 * All the people who held a course
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
 * LONG DESCRIPTION
 *
 * id Long Person ID
 * returns Person
 **/
exports.peopleIdGET = function(id) {
  return sqlDb(personTable)
    .where('Person.id', id)
    .leftJoin('Course_Instructor', 'Person.id', '=', 'Course_Instructor.person_id')
    .leftJoin('Course', 'Course_Instructor.course_id', '=', 'Course.id')
    .select('Person.id', 'Person.name', 'Person.surname', 'Person.biography', 'Person.telephone', 'Person.email',
      'Person.image_path', 'Course.id', 'Course.image_path as course_image_path' )
    .then(results => {
      if(results.length == 0) return {};
      return results[0];
    })
}
