"use strict";


function fillNextEventSection() {
    const getURL = "/api/nextEvent";
    $.get(getURL, event => {
        const eventURL = "/event?id=" + event.id.toString();
        const eventImgPath = "/assets/imgs" + event.image_path;
        const eventDate = new Date(event.date);

        $("#next-event-a-tag").attr("href", eventURL);
        $("#next-event-img").attr("src", eventImgPath);
        $("#next-event-title").html(event.name);
        $("#next-event-date").html(eventDate.toDateString());
    });
}

$(document).ready( () =>{
    fillNextEventSection();
});