'use strict';


/**
 * List of courses
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.coursesGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image_path" : "/instruments/ocarina.jpg",
  "name" : "Ocarina",
  "description" : "How an ocarina works: Air enters through the windway; Air strikes the labium, producing sound; Air pulses in and out of the ocarina, as the vessel resonates a specific pitch (see Helmholtz resonator); Covering holes lowers the pitch; uncovering holes raises the pitch; Blowing more softly lowers the pitch; blowing harder raises it. Breath force can change the pitch by three semitones. This is why ocarinas generally have no tuning mechanism or dynamic range, and why it is hard to learn to play one in tune.",
  "instrument_type_id" : 1,
  "id" : 1,
  "history" : "The modern European ocarina dates back to the 19th century, when Giuseppe Donati from Budrio, a town near Bologna, Italy transformed the ocarina from a toy, which only played a few notes, into a more comprehensive instrument (known as the first \"classical\" ocarinas). The word ocarina in the Bolognese dialect of the Emiliano-Romagnolo language means \"little goose.\" The earlier form was known in Europe as a gemshorn, which was made from animal horns of the chamois (Dutch: gems). The ocarina is an ancient wind musical instrument—a type of vessel flute. Variations exist, but a typical ocarina is an enclosed space with four to twelve finger holes and a mouthpiece that projects from the body. It is traditionally made from clay or ceramic, but other materials are also used—such as plastic, wood, glass, metal, or bone.",
  "italian_region_id" : 5
}, {
  "image_path" : "/instruments/ocarina.jpg",
  "name" : "Ocarina",
  "description" : "How an ocarina works: Air enters through the windway; Air strikes the labium, producing sound; Air pulses in and out of the ocarina, as the vessel resonates a specific pitch (see Helmholtz resonator); Covering holes lowers the pitch; uncovering holes raises the pitch; Blowing more softly lowers the pitch; blowing harder raises it. Breath force can change the pitch by three semitones. This is why ocarinas generally have no tuning mechanism or dynamic range, and why it is hard to learn to play one in tune.",
  "instrument_type_id" : 1,
  "id" : 1,
  "history" : "The modern European ocarina dates back to the 19th century, when Giuseppe Donati from Budrio, a town near Bologna, Italy transformed the ocarina from a toy, which only played a few notes, into a more comprehensive instrument (known as the first \"classical\" ocarinas). The word ocarina in the Bolognese dialect of the Emiliano-Romagnolo language means \"little goose.\" The earlier form was known in Europe as a gemshorn, which was made from animal horns of the chamois (Dutch: gems). The ocarina is an ancient wind musical instrument—a type of vessel flute. Variations exist, but a typical ocarina is an enclosed space with four to twelve finger holes and a mouthpiece that projects from the body. It is traditionally made from clay or ceramic, but other materials are also used—such as plastic, wood, glass, metal, or bone.",
  "italian_region_id" : 5
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets a course by id
 * LONG DESCRIPTION
 *
 * id Long Course ID
 * returns Course
 **/
exports.coursesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "image_path" : "/events/spring_courses_2020.jpg",
  "name" : "Presentation of Spring Courses 2020",
  "description" : "<p>The ocarina is one of the easiest of all wind instruments to learn to play. In fact, getting a tone is as simple as blowing a whistle. You may be familiar with the ocarina as an instrument through a fandom of Nintendo's Zelda games.</p><p>Every lesson will be based first on a fingering chart on few songs and starts you out with a simple 'play by number' system that anyone can learn. </p><p>Numbers over the lyrics correspond to fingerings on the chart. Once memorized the scale by numbers, it's easy to play the songs, just add a little rhythm, and you'll be entertaining yourself in no time at all!</p>",
  "id" : 1,
  "musical_instrument_id" : 1,
  "info" : "Every monday at 5PM"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

