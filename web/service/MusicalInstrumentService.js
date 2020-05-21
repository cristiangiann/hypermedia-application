'use strict';


/**
 * List of instrument types
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.instrument_typesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Aerofoni labiali",
  "id" : 1
}, {
  "name" : "Aerofoni labiali",
  "id" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of Musical Instrument
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.musical_instrumentsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "surname" : "Sinalefe",
  "image_path" : "/people/pina_sinalefe.jpg",
  "name" : "Pina",
  "telephone" : "02 679",
  "id" : 1,
  "biography" : "<p>Pina is a 27 years old cinema student, passionate about acting, singing and movies. Since she was 4, she’s been playing musical instruments like the piano and acoustic guitar, while only in the last three years she found interest in old musical instruments from her region.</p>\n<p>Pina joined the Association in 2017 when she was curious on learning more about the putipù founded in her grandma’s basement. Since then, she became first a student then a volountary, teaching music to beginners.</p>\n<p>Today Pina is our youngest teacher, bringing joy and happiness at every event.</p>",
  "email" : "pina-sinalefe1@tiscali.it"
}, {
  "surname" : "Sinalefe",
  "image_path" : "/people/pina_sinalefe.jpg",
  "name" : "Pina",
  "telephone" : "02 679",
  "id" : 1,
  "biography" : "<p>Pina is a 27 years old cinema student, passionate about acting, singing and movies. Since she was 4, she’s been playing musical instruments like the piano and acoustic guitar, while only in the last three years she found interest in old musical instruments from her region.</p>\n<p>Pina joined the Association in 2017 when she was curious on learning more about the putipù founded in her grandma’s basement. Since then, she became first a student then a volountary, teaching music to beginners.</p>\n<p>Today Pina is our youngest teacher, bringing joy and happiness at every event.</p>",
  "email" : "pina-sinalefe1@tiscali.it"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image_path" : "/instruments/ocarina.jpg",
  "name" : "Ocarina",
  "description" : "How an ocarina works: Air enters through the windway; Air strikes the labium, producing sound; Air pulses in and out of the ocarina, as the vessel resonates a specific pitch (see Helmholtz resonator); Covering holes lowers the pitch; uncovering holes raises the pitch; Blowing more softly lowers the pitch; blowing harder raises it. Breath force can change the pitch by three semitones. This is why ocarinas generally have no tuning mechanism or dynamic range, and why it is hard to learn to play one in tune.",
  "instrument_type_id" : 1,
  "id" : 1,
  "history" : "The modern European ocarina dates back to the 19th century, when Giuseppe Donati from Budrio, a town near Bologna, Italy transformed the ocarina from a toy, which only played a few notes, into a more comprehensive instrument (known as the first \"classical\" ocarinas). The word ocarina in the Bolognese dialect of the Emiliano-Romagnolo language means \"little goose.\" The earlier form was known in Europe as a gemshorn, which was made from animal horns of the chamois (Dutch: gems). The ocarina is an ancient wind musical instrument—a type of vessel flute. Variations exist, but a typical ocarina is an enclosed space with four to twelve finger holes and a mouthpiece that projects from the body. It is traditionally made from clay or ceramic, but other materials are also used—such as plastic, wood, glass, metal, or bone.",
  "italian_region_id" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List of italian regions
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.regionsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Valle D'Aosta",
  "id" : 1
}, {
  "name" : "Valle D'Aosta",
  "id" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

