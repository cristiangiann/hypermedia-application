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
    .where('id', id).then(results => {
      if(results.length == 0) return {};
      return results[0];
    });
}
