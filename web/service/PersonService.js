'use strict';


/**
 * List of people
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.peopleGET = function() {
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
 * Gets a person by id
 * LONG DESCRIPTION
 *
 * id Long Person ID
 * returns Person
 **/
exports.peopleIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "surname" : "Sinalefe",
  "image_path" : "/people/pina_sinalefe.jpg",
  "name" : "Pina",
  "telephone" : "02 679",
  "id" : 1,
  "biography" : "<p>Pina is a 27 years old cinema student, passionate about acting, singing and movies. Since she was 4, she’s been playing musical instruments like the piano and acoustic guitar, while only in the last three years she found interest in old musical instruments from her region.</p>\n<p>Pina joined the Association in 2017 when she was curious on learning more about the putipù founded in her grandma’s basement. Since then, she became first a student then a volountary, teaching music to beginners.</p>\n<p>Today Pina is our youngest teacher, bringing joy and happiness at every event.</p>",
  "email" : "pina-sinalefe1@tiscali.it"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

