"use strict";


// Fetching an event from APIs
function fetchEvent(id) {
    const getURL = "/api/events/"+id.toString();
    // AJAX call
    $.get(getURL, (event) => {
        const eventDate = new Date(event.date);
        const eventImgPath = "../assets/imgs" + event.image_path;
        const eventDescriptionParagraphs = event.description.split("\\n")

        $("#event-image").attr("src", eventImgPath);
        $("head > title").html(event.name + " - Lemon Peel Association");
        $("#event-title").html(event.name);
        eventDescriptionParagraphs.forEach(par => $("<p></p>").text(par).appendTo("#event-description"));
        $("#event-details").text(eventDate.toDateString() + " at " + event.time.substring(0, 5));
        $("#event-organiser-link").attr("href",event.organiser.url);
        $("#event-organiser-img").attr("src", "../assets/imgs"+event.organiser.image_path);
        $("#event-organiser-name").text(event.organiser.name + " " + event.organiser.surname);
        if (event.presentedCourses.length) drawPresentedCourses(event);
        else hidePresentedCoursesSection();
    });
}

function drawPresentedCourses(event) {
    let template = $("#presented-course-template").html();
    event.presentedCourses.forEach(course => {
        let $presentedCourseItem = $(template);
        let courseImgPath = "../assets/imgs" + course.image_path;

        $presentedCourseItem.attr("href", course.url);
        $presentedCourseItem.find("img").attr("src", courseImgPath).attr("alt", course.name);
        $presentedCourseItem.find(".card-text").text(course.name);
        $("#presented-courses").append($presentedCourseItem);
    });
}

function hidePresentedCoursesSection() {
    $("#presented-courses-section").toggle();
    $("#event-organiser-section").toggleClass("border-lg-right");
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchEvent(params.get(key));
});