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
  "image_path" : "/events/spring_courses_2020.jpg",
  "name" : "Presentation of Spring Courses 2020",
  "description" : "<p>The ocarina is one of the easiest of all wind instruments to learn to play. In fact, getting a tone is as simple as blowing a whistle. You may be familiar with the ocarina as an instrument through a fandom of Nintendo's Zelda games.</p><p>Every lesson will be based first on a fingering chart on few songs and starts you out with a simple 'play by number' system that anyone can learn. </p><p>Numbers over the lyrics correspond to fingerings on the chart. Once memorized the scale by numbers, it's easy to play the songs, just add a little rhythm, and you'll be entertaining yourself in no time at all!</p>",
  "id" : 1,
  "musical_instrument_id" : 1,
  "info" : "Every monday at 5PM"
}, {
  "image_path" : "/events/spring_courses_2020.jpg",
  "name" : "Presentation of Spring Courses 2020",
  "description" : "<p>The ocarina is one of the easiest of all wind instruments to learn to play. In fact, getting a tone is as simple as blowing a whistle. You may be familiar with the ocarina as an instrument through a fandom of Nintendo's Zelda games.</p><p>Every lesson will be based first on a fingering chart on few songs and starts you out with a simple 'play by number' system that anyone can learn. </p><p>Numbers over the lyrics correspond to fingerings on the chart. Once memorized the scale by numbers, it's easy to play the songs, just add a little rhythm, and you'll be entertaining yourself in no time at all!</p>",
  "id" : 1,
  "musical_instrument_id" : 1,
  "info" : "Every monday at 5PM"
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

