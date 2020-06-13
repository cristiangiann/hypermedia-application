"use strict";


// Fetching a course from APIs
function fetchCourse(id) {
    const getURL = "/api/courses/"+id.toString();
    // AJAX call
    $.get(getURL, (course) => {
        const courseImgPath = "../assets/imgs" + course.image_path;
        const courseDescriptionParagraphs = course.description.split("\\n");

        $("head > title").html(course.name + " - Lemon Peel Association");
        $("#course-title").html(course.name);
        $("#course-image").attr("src", courseImgPath);
        courseDescriptionParagraphs.forEach(par => $("<p></p>").text(par).appendTo("#course-description"));
        $("#course-details").text(course.info);
        drawTeachersSection(course.teachers);

        if (course.musical_instrument_id !== null) {
            drawMusicalInstrumentSection(course.musical_instrument);
        } else {
            // hide the section
            $("#discover-instrument-section").toggle();
            $("#teachers-section").addClass("pl-0");
            $("#teachers-section").removeClass("pl-lg-4");
        }
    });
}

function drawTeachersSection(teachers) {
    let template = $("#teachers-template").html();
    teachers.forEach(teacher => {
        let $teacherItem = $(template);
        const teacherImgPath = "../assets/imgs" + teacher.image_path;
        const teacherNameSurname = teacher.name + " " + teacher.surname;
        $teacherItem.attr("href", teacher.url);
        $teacherItem.find("img").attr("src", teacherImgPath);
        $teacherItem.find("img").attr("alt", teacherNameSurname);
        $teacherItem.find(".card-text").text(teacherNameSurname);
        $("#teachers").append($teacherItem);
    });
}

function drawMusicalInstrumentSection(instrument) {
    const instrumentImgPath = "../assets/imgs" + instrument.image_path;
    
    let template = $("#musical-instrument-template").html();
    let $instrumentItem = $(template);
    $instrumentItem.attr("href", instrument.url);
    $instrumentItem.find("img").attr("src", instrumentImgPath);
    $instrumentItem.find("img").attr("alt", instrument.name);
    $instrumentItem.find("#instrument-name").text(instrument.name);
    $("#instrument").append($instrumentItem);
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchCourse(params.get(key));
});