'use strict';

var utils = require('../utils/writer.js');
var Contacts = require('../service/ContactsService');

module.exports.send_emailPOST = function send_emailPOST (req, res, next) {
  var email = req.swagger.params['email'].value;
  var subject = req.swagger.params['subject'].value;
  var body = req.swagger.params['body'].value;
  Contacts.send_emailPOST(email,subject,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
