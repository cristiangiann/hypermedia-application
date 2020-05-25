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
        $("#teachers").append(getTeachersHTML(course.teachers));
        $("#instrument").append(getMusicalInstrumentHTML(course.musical_instrument));
    });
}

function getTeachersHTML(teachers) {
    let htmlString = "";
    teachers.forEach(teacher => {
        const teacherURL = "/person?id=" + teacher.id.toString();
        const teacherImgPath = "../assets/imgs" + teacher.image_path;
        const teacherNameSurname = teacher.name + " " + teacher.surname;
        htmlString += 
                    '<a href="' + teacherURL + '" class="col-lg-2 col-md-3 col-sm-4 col-5 px-auto mx-auto mx-sm-2 px-sm-2 mb-2">' +
                    '    <div class="my-2 card border-0 bg-transparent">' +
                    '        <img src="' + teacherImgPath + '" id="teacher-img" class="card-img-top rounded-circle" alt="' + teacherNameSurname + '">' +
                    '        <div class="card-body p-0 text-center">' +
                    '            <h6 id="teacher-name" class="card-text nowrap">' + teacherNameSurname + '</h6>' +
                    '        </div>' +
                    '    </div>' +
                    '</a>' +
                    '\n';
    });
    return htmlString;
}

function getMusicalInstrumentHTML(instrument) {
    let htmlString = "";
    const instrumentURL = "/musical-instrument?id=" + instrument.id.toString();
    const instrumentImgPath = "../assets/imgs" + instrument.image_path;
    htmlString += 
                '<a href="' + instrumentURL + '" class="col-lg-2 col-md-3 col-sm-4 col-5 px-auto mx-auto mx-sm-2 px-sm-2 mb-2">' +
                '    <div class="my-2 card border-0 bg-transparent">' +
                '        <img src="' + instrumentImgPath + '" id="instrument-img" class="card-img-top" alt="">' +
                '        <div class="card-body p-0 text-center">' +
                '            <h6 id="instrument-name" class="card-text nowrap">' + instrument.name + '</h6>' +
                '        </div>' +
                '    </div>' +
                '</a>' +
                '\n';
    return htmlString;
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchCourse(params.get(key));
});