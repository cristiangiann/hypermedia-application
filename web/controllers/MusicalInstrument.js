'use strict';

var utils = require('../utils/writer.js');
var MusicalInstrument = require('../service/MusicalInstrumentService');
var Course = require('../service/CourseService');

module.exports.instrument_typesGET = function instrument_typesGET (req, res, next) {
  MusicalInstrument.instrument_typesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.musical_instrumentsGET = function musical_instrumentsGET (req, res, next) {
  MusicalInstrument.musicalInstrumentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.musical_instrumentsIdGET = function musical_instrumentsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var musicalInstrumentPromise = MusicalInstrument.completeMusicalInstrumentByIdGET(id);
  var coursePromise = Course.courseByInstrumentIdGET(id)
  Promise.all([musicalInstrumentPromise, coursePromise])
    .then(function (responses) {
      var response = responses[0];
      response['course'] = responses[1];
      MusicalInstrument.relatedInstrumentGET(response.italian_region_id, response.instrument_type_id, id)
        .then(function(relatedInstruments) {
          response['related_instruments'] = relatedInstruments;
          utils.writeJson(res, response);
        })
    })
    .catch(function (response) {
      console.log('error')
      utils.writeJson(res, response);
    });
};

module.exports.regionsGET = function regionsGET (req, res, next) {
  MusicalInstrument.regionsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
