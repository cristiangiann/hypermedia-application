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
    });
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchPerson(params.get(key));
})