'use strict';

let sqlDb;
var courseTable = "lemonpeel\.course";

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
 * All the courses organised by Lemon Peel association
 *
 * returns List
 **/
exports.coursesGET = function() {
  return sqlDb(courseTable)
  .select('id', 'name', 'image_path')
  .orderBy('name')
  .then(data => {
    console.log(data);
    return data;
  });
}

/**
 * Gets a course by id
 * Gets information about the selected course
 *
 * id Long Course ID
 * returns Course
 **/
exports.completeCourseByIdGET = function(id) {
  return sqlDb(courseTable)
    .select('lemonpeel\.course.id', 'lemonpeel\.course.name', 'lemonpeel\.course.info', 'lemonpeel\.course.description', 'lemonpeel\.course.image_path', 'musical_instrument_id')
    .where('lemonpeel\.course.id', id)
    .then(results => {
      if(results.length == 0) return {};
      return results[0];
    });
}

/**
 * Gets a course by Instrument id
 * Gets basic information about the course of a specific musical instrument
 *
 * id Long Musical Instrument ID
 * returns Course
 **/
exports.courseByInstrumentIdGET = function(instrumentId) {
  return sqlDb('lemonpeel\.course')
    .where('musical_instrument_id', instrumentId)
    .select('id', 'name', 'image_path')
    .then(data => {
      console.log(data);
      if(data.length == 0) return {};
      return data[0];
    });
}

/**
 * Gets a course by Event id
 * Gets basic information about the course presented during the selected event
 *
 * id Long Event ID
 * returns Course
 **/
exports.coursesByEventIdGET = function(eventId){
  return sqlDb('lemonpeel\.course_presentation')
    .where('event_id', eventId)
    .leftJoin('lemonpeel\.course', 'lemonpeel\.course.id', '=', 'course_id')
    .select('id', 'name', 'image_path')
    .orderBy('name');
}

/**
 * Gets courses by Person id
 * Gets basic information about the courses taught by a specific person
 *
 * id Long Person ID
 * returns List
 **/
exports.coursesByPeopleIdGET = function(personId) {
  return sqlDb('lemonpeel\.course_instructor')
    .where('person_id', personId)
    .leftJoin('lemonpeel\.course', 'lemonpeel\.course_instructor.course_id', '=', 'lemonpeel\.course.id')
    .select('lemonpeel\.course.id', 'lemonpeel\.course.image_path', 'lemonpeel\.course.name')
    .orderBy('lemonpeel\.course.name');
}
