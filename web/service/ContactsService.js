'use strict';

let sqlDb;

exports.contactsDbSetup = function(connection) {
  sqlDb = connection;
  console.log("Checking if the contacts table exists");
  return sqlDb.schema.hasTable("contacts").then( (exists) => {
    if(!exists) {
      console.log("The table contacts does not exist");
      return sqlDb.schema.createTable("contacts", table => {
        table.increments();
        table.text("sender_email");
        table.text("subject");
        table.text("body");
      });
    } else {
      console.log("The table contacts exists");
    }
  });
};

/**
 * Send a message to the association
 * LONG DESCRIPTION
 *
 * email String email address of the sender
 * subject String subject of the message
 * body String body of the message
 * no response value expected for this operation
 **/
exports.send_emailPOST = function(email,subject,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

exports.send_emailPOST = function(email,subject,body) {
  return sqlDb("contacts")
}

