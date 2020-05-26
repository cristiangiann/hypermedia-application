'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');
var Course = require('../service/CourseService');

module.exports.peopleGET = function peopleGET (req, res, next) {
  Person.peopleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.peopleIdGET = function peopleIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var personPromise = Person.completePersonByIdGET(id);
  var teacherOfPromise = Course.courseByPeopleIdGET(id);
  Promise.all([personPromise, teacherOfPromise])
    .then(function (responses) {
      if(responses[0]['id'] == id){
        var response = responses[0];
        response['courses'] = responses[1];
        utils.writeJson(res, response);
      } else {
        utils.writeJson(res, responses[0], 404);
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};
