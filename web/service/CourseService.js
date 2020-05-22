'use strict';

let sqlDb;
var courseTable = "Course";

exports.courseDbSetup = function(connection) {
  sqlDb = connection;
  console.log("Checking if " + courseTable + " table exists");
  return sqlDb.schema.hasTable(courseTable).then(exists => {
    if(!exists) {
      console.log(courseTable + " table does not exists");
      return false;
    }else{
      console.log(courseTable + " table exists");
    }
  });
};

/**
 * List of courses
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.coursesGET = function() {
  return sqlDb(courseTable);
}

/**
 * Gets a course by id
 * LONG DESCRIPTION
 *
 * id Long Course ID
 * returns Course
 **/
exports.coursesIdGET = function(id) {
  return sqlDb(courseTable)
  .where('id', id).then(results => {
    if(results.length == 0) return {};
    return results[0];
  });
}
