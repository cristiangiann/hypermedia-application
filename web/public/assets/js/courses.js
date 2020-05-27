"use strict";



// Fetching all courses from APIs
function fetchCourses() {
    // AJAX call
    $.get("/api/courses", (data) => {
        data.forEach( course => {
            const courseURL = "/course?id=" + course.id.toString();
            const courseName = course.name;
            const courseImgPath = "../assets/imgs" + course.image_path;

            let template = $("#course-item-template").html();
            let $courseItem = $(template);

            $courseItem.attr("href", courseURL);
            $courseItem.find("img").attr("src", courseImgPath);
            $courseItem.find("img").attr("alt", courseName);
            $courseItem.find("h5").text(courseName);
            $("#courses-section").append($courseItem);
        });
    });
}

$(document).ready( () =>{
    fetchCourses();
});