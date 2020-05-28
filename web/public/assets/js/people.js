"use strict";



// Fetching all people from APIs
function fetchPeople() {
    // AJAX call
    $.get("/api/people", (data) => {
        let template = $("#person-item-template").html();
        data.forEach( person => {
            let personNameSurname = person.name + " " + person.surname;
            let personImgPath = "../assets/imgs" + person.image_path;
            let personId = person.id;
            let personLink = "person?id=" + personId.toString();
            let $personItem = $(template);
            $personItem.attr("href", personLink);
            $personItem.find("img").attr("src", personImgPath);
            $personItem.find("h5").text(personNameSurname);
            
            $("#people-section").append($personItem);
        });
    });
}

$(document).ready( () =>{
    fetchPeople();
})