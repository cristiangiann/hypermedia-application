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
exports.completeCourseByIdGET = function(id) {
  return sqlDb(courseTable)
    .select('Course.id', 'Course.name', 'Course.info', 'Course.description', 'Course.image_path', 'musical_instrument_id')
    .where('Course.id', id)
    .then(results => {
      if(results.length == 0) return {};
      return results[0];
    });
}

exports.courseByInstrumentIdGET = function(instrumentId) {
  return sqlDb('Course')
    .where('musical_instrument_id', instrumentId)
    .select('id', 'name', 'image_path')
    .then(data => {
      console.log(data);
      if(data.length == 0) return {};
      return data[0];
    });
}

exports.coursesByEventIdGET = function(eventId){
  return sqlDb('Course_Presentation')
    .where('event_id', eventId)
    .leftJoin('Course', 'Course.id', '=', 'course_id')
    .select('id', 'name', 'image_path');
}

exports.courseByPeopleIdGET = function(personId) {
  return sqlDb('Course_Instructor')
    .where('person_id', personId)
    .leftJoin('Course', 'Course_Instructor.course_id', '=', 'Course.id')
    .select('Course.id', 'Course.image_path', 'Course.name')
}
