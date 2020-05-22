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
 * LONG DESCRIPTION
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
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.musical_instrumentsGET = function() {
  return sqlDb(instrumentTableName)
  .select('id', 'name', 'image_path', 'instrument_type_id', 'italian_region_id')
  .then(data => {
    console.log(data);
    return data;
  });
}

/**
 * Gets a musical instrument by id
 * LONG DESCRIPTION
 *
 * id Long Musical instrument ID
 * returns MusicalInstrument
 **/
exports.musical_instrumentsIdGET = function(id) {
  return sqlDb(instrumentTableName)
  .leftJoin('Italian_Region', 'Italian_Region.id', '=', 'Musical_Instrument.italian_region_id')
  .leftJoin('Instrument_Type', 'Instrument_Type.id', '=', 'Musical_Instrument.instrument_type_id')
  .select('Musical_Instrument.id', 'Musical_Instrument.name', 'description', 'history', 'image_path', 'Instrument_Type.name as type', 'Italian_Region.name as region')
  .where('Musical_Instrument.id', id).then(results => {
    if(results.length == 0) return {};
    return results[0];
  });
}

/**
 * List of italian regions
 * LONG DESCRIPTION
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
