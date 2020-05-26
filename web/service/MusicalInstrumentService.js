'use strict';

let sqlDb;
var instrumentTableName = "Musical_Instrument";
var typeTableName = "Instrument_Type";
var regionTableName = "Italian_Region";

exports.musicalInstrumentDbSetup = function(connection) {
  sqlDb = connection;
  console.log("Checking if " + instrumentTableName + " table exists");
  return sqlDb.schema.hasTable(instrumentTableName).then(exists => {
    if(!exists) {
      console.log(instrumentTableName + " table does not exists");
      return false;
    }else{
      console.log(instrumentTableName + " table exists");
    }
  });
};

/**
 * List of instrument types
 * List of all the types of the musical instruments that are into the database
 *
 * returns List
 **/
exports.instrument_typesGET = function() {
  return sqlDb(typeTableName)
    .then(data => {
      console.log(data);
      return data;
    });
}

/**
 * List of Musical Instrument
 * Preview of all the musical instruments that are relevant for Lemon Peel association
 *
 * returns List
 **/
exports.musicalInstrumentsGET = function() {
  return sqlDb(instrumentTableName)
    .select('id', 'name', 'image_path', 'instrument_type_id', 'italian_region_id')
    .then(data => {
      console.log(data);
      return data;
    });
}

/**
 * Gets a musical instrument by id
 * All the information about the selected musical instrument, with region and type
 *
 * id Long Musical instrument ID
 * returns MusicalInstrument
 **/
exports.completeMusicalInstrumentByIdGET = function(id) {
  return sqlDb(instrumentTableName)
    .leftJoin('Italian_Region', 'Italian_Region.id', '=', 'Musical_Instrument.italian_region_id')
    .leftJoin('Instrument_Type', 'Instrument_Type.id', '=', 'Musical_Instrument.instrument_type_id')
    .select('Musical_Instrument.id', 'Musical_Instrument.name', 'description', 'history', 'image_path', 'instrument_type_id', 'italian_region_id', 'Instrument_Type.name as type', 'Italian_Region.name as region')
    .where('Musical_Instrument.id', id)
    .then(data => {
      console.log(data);
      if(data.length == 0) return {};
      return data[0];
    });
}

/**
 * List of italian regions
 * All the Italian regions and their identifiers
 *
 * returns List
 **/
exports.regionsGET = function() {
  return sqlDb(regionTableName)
    .then(data => {
      console.log(data);
      return data;
    });
}

/**
 * Gets an instrument by id
 * Preview of the selected Musical Instrument
 *
 * id Long MusicalInstrument ID
 * returns MusicalInstrument preview
 **/
exports.instrumentByIdGET = function(id){
  return sqlDb('Musical_Instrument')
    .where('id', id)
    .select('id', 'name', 'image_path')
    .then(results => {
      if(results.length == 0) return {};
      return results[0];
    });
}

/**
 * Gets the related musical instrument of an instrument
 * Preview of the musical instrument that are similar (by type or region) a selected one
 *
 * id Long Region ID
 * id Long Type ID
 * id Long MusicalInstrument ID
 * returns List
 **/
exports.relatedInstrumentGET = function(regionId, typeId, instrumentId) {
  console.log(instrumentId)
  return sqlDb(instrumentTableName)
    .where('italian_region_id', regionId)
    .whereNot('id', instrumentId)
    .orWhere('instrument_type_id', typeId)
    .whereNot('id', instrumentId)
    .select('id', 'name', 'image_path')
    .then(data => {
      console.log(data);
      return data;
    });
}
