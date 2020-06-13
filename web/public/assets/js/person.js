"use strict";


let peopleMap = sessionStorage.peopleMap;

// Fetching a person from APIs
function fetchPerson(id) {
    const getURL = "/api/people/"+id.toString();
    let person = peopleMap.get(id);
    if (person == null) {
        // AJAX call
        $.get(getURL, (person) => {
            peopleMap.set(id, person);
            sessionStorage.peopleMap = JSON.stringify(Array.from(peopleMap));
            drawPerson(person);
        });
    } else {
        drawPerson(person);
    }
}

function drawPerson(person) {
    const personNameSurname = person.name + " " + person.surname;
    const personImgPath = "../assets/imgs" + person.image_path;
    const personTel = person.telephone;
    const personEmail = person.email;
    const personBiographyParagraphs = person.biography.split("\\n");

    $("head > title").html(personNameSurname + " - Lemon Peel Association");
    $("#person-name").text(personNameSurname);
    $("#person-image").attr("src", personImgPath);
    $("#person-image").attr("alt", personNameSurname);
    personBiographyParagraphs.forEach(par => $("<p></p>").text(par).appendTo("#person-bio"));
    $("#tel-number").text(personTel);
    $("#email-addr").text(personEmail);
    $("#courses-section").html(getCoursesHTML(person.courses));
}

function getCoursesHTML(courses) {
    let template = $("#course-item-template").html();
    courses.forEach( course => {
        let courseImgPath = "../assets/imgs" + course.image_path;
        let courseName = course.name;
        let $courseItem = $(template);

        $courseItem.find("a").attr("href", course.url);
        $courseItem.find("img").attr("src", courseImgPath).attr("alt", "course image");
        $courseItem.find(".card-text").text(courseName);

        $("#courses-section").append($courseItem);
    });
}

$(document).ready( () =>{
    if (peopleMap == null) peopleMap = new Map();
    else peopleMap = new Map(JSON.parse(peopleMap));
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchPerson(params.get(key));
});