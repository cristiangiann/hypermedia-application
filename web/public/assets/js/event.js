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
        $("#presented-courses").html(getPresentedCoursesHTML(event));
    });
}

function getPresentedCoursesHTML(event) {
    let htmlString = "";
    event.presentedCourses.forEach(course => {
        htmlString += 
        '<!-- Presented courses card -->' +
        '<a href="/course?id=' + course.id.toString() + '" id="event-course-link" class="col-lg-2 col-md-3 col-sm-4 col-5 px-auto mx-auto mx-sm-2 px-sm-2 mb-2">' +
        '    <div class="my-2 card border-0 bg-transparent">' +
        '        <img src="../assets/imgs' + course.image_path + '" id="event-course-img" class="card-img-top" alt="' + course.name + '">' +
        '        <div class="card-body p-0 text-center">' +
        '            <h6 id="event-course-name" class="card-text nowrap">' + course.name + '</h6>' +
        '        </div>' +
        '    </div>' +
        '</a>' +
        '\n';
    });
    return htmlString;
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchEvent(params.get(key));
})