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

        $("head > title, #person-name").text(personNameSurname);
        $("#person-image").attr("src", personImgPath);
        $("#person-image").attr("alt", personNameSurname);
        $("#person-bio").html(personBiography);
        $("#tel-number").text(personTel);
        $("#email-addr").text(personEmail);
        $("#courses-section").html(getCoursesHTML(person.courses));
    });
}

function getCoursesHTML(courses) {
    let htmlString = "";
    courses.forEach( course => {
        htmlString += 
                    '<div class="squared-image mx-2">' +
                    '   <a href="/course?id=' + course.id.toString() + '">' +
                    '       <img src="../assets/imgs' + course.image_path + '" class="img-fluid card-img-top">' +
                    '       <div class="card-body p-0 text-center">' +
                    '           <p>' + course.name + '</p>' +
                    '       </div>' +
                    '   </a>' +
                    '</div>' +
                    '\n';
    });
    return htmlString;
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchPerson(params.get(key));
})