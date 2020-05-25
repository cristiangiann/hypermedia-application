"use strict";



// Fetching all courses from APIs
function fetchCourses() {
    // AJAX call
    $.get("/api/courses", (data) => {
        let htmlString = "";
        data.forEach( course => {
            const courseURL = "/course?id=" + course.id.toString();
            const courseName = course.name;
            const courseImgPath = "../assets/imgs" + course.image_path;

            htmlString += 
            '<a href="' + courseURL + '"' + 'class="col-lg-2 col-md-3 col-sm-4 col-5 px-auto mx-auto mx-sm-2 px-sm-2 mb-2">' +
            '   <div class="course-item my-2 card border-0 bg-transparent">' +
            '       <img src="'+ courseImgPath +'" class="card-img-top" alt="' + courseName + '">' +
            '       <div class="card-body p-0 text-center">' +
            '           <h5 class="card-text">' + courseName + '</h5>' +
            '       </div>' +
            '   </div>' +
            '</a>' +
            '\n';
        });
        $("#courses-section").append(htmlString);
    });
}

$(document).ready( () =>{
    fetchCourses();
})