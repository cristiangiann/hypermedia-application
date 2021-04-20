'use strict';

let sqlDb;
var eventTable = "lemonpeel\.event";

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
 * List of next events
 * All next events organised by Lemon Peel association
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
 * List of past events
 * All past events organised by Lemon Peel association
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
 * All the information about the selected event
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
