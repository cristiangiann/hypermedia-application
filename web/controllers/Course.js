'use strict';

var utils = require('../utils/writer.js');
var Course = require('../service/CourseService');
var Person = require('../service/PersonService');
var MusicalInstrument = require('../service/MusicalInstrumentService');
var UrlController = require('./UrlController');


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
  var coursePromise = Course.completeCourseByIdGET(id);
  var teacherPromise = Person.peopleByCourseIdGET(id);
  Promise.all([coursePromise, teacherPromise])
    .then(function (responses) {
      if(responses[0]['id'] == id){
        var response = responses[0];
        response['teachers'] = UrlController.setMultipleUrl(responses[1], 'person');
        if(response.musical_instrument_id != null){
          MusicalInstrument.instrumentByIdGET(response.musical_instrument_id)
            .then(function(instrument) {
              response['musical_instrument'] = UrlController.setSingleUrl(instrument);
              utils.writeJson(res, response);
            })
        } else {
          utils.writeJson(res, response);
        }
      } else {
        utils.writeJson(res, responses[0], 404);
      }
    })
    .catch(function (response) {
      utils.writeJson(res, response, 500);
    });
};
