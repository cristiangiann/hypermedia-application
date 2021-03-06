'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');
var Course = require('../service/CourseService');
var Person = require('../service/PersonService');
var UrlController = require('./UrlController');


module.exports.nextEventsGET = function eventsGET (req, res, next) {
  Event.nextEventsGET()
    .then(function (response) {
      utils.writeJson(res, UrlController.setMultipleUrl(response, 'event'));
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.pastEventsGET = function eventsGET (req, res, next) {
  Event.pastEventsGET()
    .then(function (response) {
      utils.writeJson(res, UrlController.setMultipleUrl(response, 'event'));
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.nextEventGET = function eventsGET (req, res, next) {
  Event.nextEventsGET()
    .then(function (response) {
      utils.writeJson(res, UrlController.setSingleUrl(response[0], 'event'));
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500)
    });
};

module.exports.eventsIdGET = function eventsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var eventPromise = Event.completeEventByIdGET(id);
  var presentedCoursesPromise = Course.coursesByEventIdGET(id);
  Promise.all([eventPromise, presentedCoursesPromise])
    .then(function (responses) {
      if(responses[0]['id'] == id){
        var response = responses[0];
        response['presentedCourses'] = UrlController.setMultipleUrl(responses[1], 'course');
        Person.personByIdGET(response.organiser_id)
          .then(function(organiser) {
            response['organiser'] = UrlController.setSingleUrl(organiser, 'person');
            utils.writeJson(res, response);
            console.log(response);
          })
      } else {
        utils.writeJson(res, responses[0], 404);
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};
