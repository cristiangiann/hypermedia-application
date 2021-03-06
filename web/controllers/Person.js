'use strict';

var utils = require('../utils/writer.js');
var Person = require('../service/PersonService');
var Course = require('../service/CourseService');
var UrlController = require('./UrlController');

module.exports.peopleGET = function peopleGET (req, res, next) {
  Person.peopleGET()
    .then(function (response) {
      utils.writeJson(res, UrlController.setMultipleUrl(response, 'person'));
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.peopleIdGET = function peopleIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var personPromise = Person.completePersonByIdGET(id);
  var teacherOfPromise = Course.coursesByPeopleIdGET(id);
  Promise.all([personPromise, teacherOfPromise])
    .then(function (responses) {
      if(responses[0]['id'] == id){
        var response = responses[0];
        response['courses'] = UrlController.setMultipleUrl(responses[1], 'course');
        utils.writeJson(res, response);
      } else {
        utils.writeJson(res, responses[0], 404);
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};
