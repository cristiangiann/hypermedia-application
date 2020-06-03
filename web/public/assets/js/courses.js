"use strict";


let courses = sessionStorage.courses;

// Fetching all courses from APIs
function fetchCourses() {
    if (courses == null) {
        // AJAX call
        $.get("/api/courses", (data) => {
            courses = data;
            sessionStorage.courses = JSON.stringify(courses);
            drawCourses(courses);
        });
    } else {
        courses = JSON.parse(courses);
        drawCourses(courses);
    }
}

function drawCourses(data) {
    let template = $("#course-item-template").html();
    data.forEach( course => {
        const courseName = course.name;
        const courseImgPath = "../assets/imgs" + course.image_path;

        let $courseItem = $(template);

        $courseItem.attr("href", course.url);
        $courseItem.find("img").attr("src", courseImgPath);
        $courseItem.find("img").attr("alt", courseName);
        $courseItem.find(".card-text").text(courseName);
        $("#courses-section").append($courseItem);
    });
}

$(document).ready( () =>{
    fetchCourses();
});