'use strict';

let sqlDb;
var eventTable = "Event"

exports.eventDbSetup = function(connection) {
  sqlDb = connection;
  console.log("Checking if " + eventTable +" table exists");
  return sqlDb.schema.hasTable(eventTable).then(exists => {
    if(!exists) {
      console.log(eventTable + " table does not exists");
      return false;
    }else{
      console.log(eventTable + " table exists");
    }
  });
};

/**
 * List of events
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.eventsGET = function() {
  return sqlDb(eventTable)
  .select('id', 'name', 'date', 'time', 'description', 'image_path', 'organiser_id')
  .then(data => {
    console.log(data);
    return data;
  });
}

/**
 * Gets an event by id
 * LONG DESCRIPTION
 *
 * id Long Event ID
 * returns Event
 **/
exports.eventsIdGET = function(id) {
  return sqlDb(eventTable)
  .leftJoin('Course', 'Course.id', '=', 'Event.id')
  .leftJoin('Person', 'Person.id', '=', 'organiser_id')
  .select('Event.id', 'Event.name', 'Event.description', 'Event.date', 'Event.time', 'Event.image_path',
    'Course.id as course_id', 'Course.name as course_name', 'Course.image_path as course_image_path',
    'Person.id as organiser_id', 'Person.name as organiser_name', 'Person.image_path as organiser_image_path')
  .where('Event.id', id).then(results => {
    if(results.length == 0) return {};
    return results[0];
  });
}
