"use strict";


// Fetching a course from APIs
function fetchCourse(id) {
    const getURL = "/api/courses/"+id.toString();
    // AJAX call
    $.get(getURL, (course) => {
        const courseImgPath = "../assets/imgs" + course.image_path;

        $("head > title").html(course.name + " - Lemon Peel Association");
        $("#course-title").html(course.name);
        $("#course-image").attr("src", courseImgPath);
        $("#course-description").html(course.description);
        $("#course-details").text(course.info);
        drawTeachersSection(course.teachers);

        if (course.musical_instrument_id !== null) {
            drawMusicalInstrumentSection(course.musical_instrument);
        } else {
            // hide the section
            $("#discover-instrument-section").addClass("d-none");
            $("#teachers-section").addClass("pl-0");
        }
    });
}

function drawTeachersSection(teachers) {
    let template = $("#teachers-template").html();
    teachers.forEach(teacher => {
        let $teacherItem = $(template);
        const teacherURL = "/person?id=" + teacher.id.toString();
        const teacherImgPath = "../assets/imgs" + teacher.image_path;
        const teacherNameSurname = teacher.name + " " + teacher.surname;
        $teacherItem.attr("href", teacherURL);
        $teacherItem.find("img").attr("src", teacherImgPath);
        $teacherItem.find("img").attr("alt", teacherNameSurname);
        $teacherItem.find("h6").text(teacherNameSurname);
        $("#teachers").append($teacherItem);
    });
}

function drawMusicalInstrumentSection(instrument) {
    const instrumentURL = "/musical-instrument?id=" + instrument.id.toString();
    const instrumentImgPath = "../assets/imgs" + instrument.image_path;
    
    let template = $("#musical-instrument-template").html();
    let $instrumentItem = $(template);
    $instrumentItem.attr("href", instrumentURL);
    $instrumentItem.find("img").attr("src", instrumentImgPath);
    $instrumentItem.find("img").attr("alt", instrument.name);
    $instrumentItem.find("#instrument-name").text(instrument.name);
    console.log($instrumentItem);
    $("#instrument").append($instrumentItem);
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchCourse(params.get(key));
});