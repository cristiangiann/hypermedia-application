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
  return sqlDb(instrumentTableName)
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
  .where('id', id).then(results => {
    if(results.length == 0) return {};
    return results[0];
  });
}
