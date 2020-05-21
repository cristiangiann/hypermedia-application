'use strict';


/**
 * List of events
 * LONG DESCRIPTION
 *
 * returns List
 **/
exports.eventsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "",
  "image_path" : "/events/spring_courses_2020.jpg",
  "name" : "Presentation of Spring Courses 2020",
  "organiser_id" : 1,
  "description" : "<p>Come visit us for the presentation of the new courses held the following spring season! This year the Association has two new teachers who will introduce themselves and the courses they’ll teach.</p><p>Two new courses have been added to the already existing ones, related to, respectively, the ocarina and putipù instruments. Join this event to learn more about them and their  related teaching activities.</p><p>Remember that there’s no participation fee and anyone can attend this event. At the end, a small buffet with networking will be available for all the participants.</p>",
  "id" : 1,
  "time" : "61200"
}, {
  "date" : "",
  "image_path" : "/events/spring_courses_2020.jpg",
  "name" : "Presentation of Spring Courses 2020",
  "organiser_id" : 1,
  "description" : "<p>Come visit us for the presentation of the new courses held the following spring season! This year the Association has two new teachers who will introduce themselves and the courses they’ll teach.</p><p>Two new courses have been added to the already existing ones, related to, respectively, the ocarina and putipù instruments. Join this event to learn more about them and their  related teaching activities.</p><p>Remember that there’s no participation fee and anyone can attend this event. At the end, a small buffet with networking will be available for all the participants.</p>",
  "id" : 1,
  "time" : "61200"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets an event by id
 * LONG DESCRIPTION
 *
 * id Long Event ID
 * returns Event
 **/
exports.eventsIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "",
  "image_path" : "/events/spring_courses_2020.jpg",
  "name" : "Presentation of Spring Courses 2020",
  "organiser_id" : 1,
  "description" : "<p>Come visit us for the presentation of the new courses held the following spring season! This year the Association has two new teachers who will introduce themselves and the courses they’ll teach.</p><p>Two new courses have been added to the already existing ones, related to, respectively, the ocarina and putipù instruments. Join this event to learn more about them and their  related teaching activities.</p><p>Remember that there’s no participation fee and anyone can attend this event. At the end, a small buffet with networking will be available for all the participants.</p>",
  "id" : 1,
  "time" : "61200"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

