let { contactsDbSetup } = require("./ContactsService");

const sqlDbFactory = require("knex");
const dotenv = require('dotenv').config();

let sqlDb = sqlDbFactory({
    client: 'mysql',
    connection: {
      host            : process.env.DB_HOST,
      user            : process.env.DB_USER,
      password        : process.env.DB_PASSWORD,
      database        : process.env.DB_DATABASE
    },
    debug: true
});

exports.setupDataLayer = function() {
  console.log("Setting up data layer");
  return contactsDbSetup(sqlDb);
};

module.export = { database: sqlDb }
