"use strict";


// Fetching an event from APIs
function fetchEvent(id) {
    const getURL = "/api/events/"+id.toString();
    // AJAX call
    $.get(getURL, (event) => {
        const eventDate = new Date(event.date);
        const eventImgPath = "../assets/imgs" + event.image_path;

        $("#event-image").attr("src", eventImgPath);
        $("head > title").html(event.name + " - Lemon Peel Association");
        $("#event-title").html(event.name);
        $("#event-description").html(event.description);
        $("#event-details").text(eventDate.toDateString() + " at " + event.time.substring(0, 5));
        $("#event-organiser-link").attr("href", "/person?id="+event.organiser.id.toString());
        $("#event-organiser-img").attr("src", "../assets/imgs"+event.organiser.image_path);
        $("#event-organiser-name").text(event.organiser.name + " " + event.organiser.surname);
        drawPresentedCourses(event);
    });
}

function drawPresentedCourses(event) {
    let template = $("#presented-course-template").html();
    event.presentedCourses.forEach(course => {
        let $presentedCourseItem = $(template);
        let courseLink = "/course?id=" + course.id.toString();
        let courseImgPath = "../assets/imgs" + course.image_path;

        $presentedCourseItem.attr("href", courseLink);
        $presentedCourseItem.find("img").attr("src", courseImgPath).attr("alt", course.name);
        $presentedCourseItem.find("h6").text(course.name);
        $("#presented-courses").append($presentedCourseItem);
    });
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchEvent(params.get(key));
});