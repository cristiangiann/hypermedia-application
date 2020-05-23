"use strict";



// Fetching all people from APIs
function fetchPeople() {
    // AJAX call
    $.get("/api/people", (data) => {
        data.forEach( person => {
            let personNameSurname = person.name + " " + person.surname;
            let personImgPath = person.image_path;
            let personId = person.id;

            let htmlString = 
            '<a href="person?id=' + personId +'" class="col-lg-2 col-md-3 col-sm-4 col-5 px-auto mx-auto mx-sm-2 px-sm-2 mb-2">' +
            '   <div class="people-item my-2 card border-0 bg-transparent">' +
            '       <img src="' + personImgPath + '" class="card-img-top rounded-circle thumbnail" alt="person image">' +
            '       <div class="card-body p-0 text-center">' + 
            '           <h5 class="card-text">' + personNameSurname +'</h5>' +
            '       </div>' +
            '   </div>' +
            '</a>' +
            '\n';
            
            $("#people-section").append(htmlString);
        });
    });
}

$(document).ready( () =>{
    fetchPeople();
})