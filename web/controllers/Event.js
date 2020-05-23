'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');
var Course = require('../service/CourseService');
var Person = require('../service/PersonService');

module.exports.eventsGET = function eventsGET (req, res, next) {
  Event.eventsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsIdGET = function eventsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var eventPromise = Event.completeEventByIdGET(id);
  var presentedCoursesPromise = Course.coursesByEventIdGET(id);
  Promise.all([eventPromise, presentedCoursesPromise])
    .then(function (responses) {
      var response = responses[0];
      response['presentedCourses'] = responses[1];
      Person.personByIdGET(response.organiser_id)
        .then(function(organiser) {
          response['organiser'] = organiser;
          utils.writeJson(res, response);
          console.log(response);
        })
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
