"use strict";


// Fetching a person from APIs
function fetchPerson(id) {
    const getURL = "/api/people/"+id.toString();
    // AJAX call
    $.get(getURL, (person) => {
        const personNameSurname = person.name + " " + person.surname;
        const personImgPath = "../assets/imgs" + person.image_path;
        const personTel = person.telephone;
        const personEmail = person.email;
        const personBiography = person.biography;

        $("head > title").html(personNameSurname + " - Lemon Peel Association");
        $("#person-name").text(personNameSurname);
        $("#person-image").attr("src", personImgPath);
        $("#person-image").attr("alt", personNameSurname);
        $("#person-bio").html(personBiography);
        $("#tel-number").text(personTel);
        $("#email-addr").text(personEmail);
        $("#courses-section").html(getCoursesHTML(person.courses));
    });
}

function getCoursesHTML(courses) {
    let template = $("#course-item-template").html();
    courses.forEach( course => {
        let courseLink = "/course?id=" + course.id.toString();
        let courseImgPath = "../assets/imgs" + course.image_path;
        let courseName = course.name;
        let $courseItem = $(template);

        $courseItem.find("a").attr("href", courseLink);
        $courseItem.find("img").attr("src", courseImgPath).attr("alt", "course image");
        $courseItem.find("p").text(courseName);

        $("#courses-section").append($courseItem);
    });
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchPerson(params.get(key));
});