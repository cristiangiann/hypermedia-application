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
  return sqlDb(courseTable)
  .select('id', 'name', 'image_path')
  .then(data => {
    console.log(data);
    return data;
  });
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
  .leftJoin('Musical_Instrument', 'Course.id', '=', 'Musical_Instrument.id')
  .select('Course.id', 'Course.name', 'Course.info', 'Course.description', 'Course.image_path', 'Musical_Instrument.id as musical_instrument_id',
    'Musical_Instrument.name as musical_instrument_name', 'Musical_Instrument.image_path as musical_instrument_image_path')
  .where('Course.id', id).then(results => {
    if(results.length == 0) return {};
    return results[0];
  });
}
