"use strict";



// Fetching all courses from APIs
function fetchCourses() {
    // AJAX call
    $.get("/api/courses", (data) => {
        data.forEach( course => {
            const courseName = course.name;
            const courseImgPath = "../assets/imgs" + course.image_path;

            let template = $("#course-item-template").html();
            let $courseItem = $(template);

            $courseItem.attr("href", course.url);
            $courseItem.find("img").attr("src", courseImgPath);
            $courseItem.find("img").attr("alt", courseName);
            $courseItem.find(".card-text").text(courseName);
            $("#courses-section").append($courseItem);
        });
    });
}

$(document).ready( () =>{
    fetchCourses();
});