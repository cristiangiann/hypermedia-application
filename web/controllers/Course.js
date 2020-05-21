'use strict';

var utils = require('../utils/writer.js');
var Course = require('../service/CourseService');

module.exports.coursesGET = function coursesGET (req, res, next) {
  Course.coursesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.coursesIdGET = function coursesIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Course.coursesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
