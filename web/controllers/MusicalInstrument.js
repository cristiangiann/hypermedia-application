'use strict';

var utils = require('../utils/writer.js');
var MusicalInstrument = require('../service/MusicalInstrumentService');

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
  MusicalInstrument.musical_instrumentsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.musical_instrumentsIdGET = function musical_instrumentsIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  MusicalInstrument.musical_instrumentsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
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
