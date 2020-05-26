'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');
var Course = require('../service/CourseService');
var Person = require('../service/PersonService');

module.exports.nextEventsGET = function eventsGET (req, res, next) {
  Event.nextEventsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.pastEventsGET = function eventsGET (req, res, next) {
  Event.pastEventsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};

module.exports.nextEventGET = function eventsGET (req, res, next) {
  Event.nextEventsGET()
    .then(function (response) {
      utils.writeJson(res, response.reduce(function(prev, curr) {
        return prev["date"] < curr["date"] ? prev : curr;
      }));
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
        response['presentedCourses'] = responses[1];
        Person.personByIdGET(response.organiser_id)
          .then(function(organiser) {
            response['organiser'] = organiser;
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
