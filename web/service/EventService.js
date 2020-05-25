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
exports.nextEventsGET = function() {
  return sqlDb(eventTable)
    .whereNot('date', '<', new Date().toISOString())
    .orderBy('date')
    .select('id', 'name', 'date', 'time', 'description', 'image_path', 'organiser_id')
    .then(data => {
      console.log(data);
      return data;
    });
}

/**
 * List of events
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.pastEventsGET = function() {
  return sqlDb(eventTable)
    .where('date', '<', new Date().toISOString())
    .orderBy('date', 'DESC')
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
exports.completeEventByIdGET = function(id) {
  return sqlDb(eventTable)
    .select('id', 'name', 'description', 'date', 'time', 'image_path', 'organiser_id')
    .where('id', id)
    .then(results => {
      if(results.length == 0) return {};
      return results[0];
  });
}

exports.eventOrganiserGET = function(id) {
  return sqlDb('Person')
    .where('id', id)
    .select('id', 'name', 'surname', 'image_path')
    .then(results => {
      if(results.length == 0) return {};
      return results[0];
    });
}
