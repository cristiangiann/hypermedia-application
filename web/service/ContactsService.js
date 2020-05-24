'use strict';

let sqlDb;
var messageTable = "Message"


exports.contactsDbSetup = function(connection) {
  sqlDb = connection;
  console.log("Checking if the " + messageTable + " table exists");
  return sqlDb.schema.hasTable(messageTable).then( (exists) => {
    if(!exists) {
      console.log("The table " + messageTable + " does not exist");
      return sqlDb.schema.createTable(messageTable, table => {
        table.increments();
        table.text("sender_email");
        table.text("subject");
        table.text("body");
      });
    } else {
      console.log("The table " + messageTable + " exists");
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
  return sqlDb(messageTable).insert({email: email, subject: subject, body: body, timestamp: Date.now()})
}
