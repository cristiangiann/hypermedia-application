"use strict";


function fillNextEventSection() {
    const getURL = "/api/nextEvent";
    $.get(getURL, event => {
		const imageExtension = event.image_path.split(".")[1];
		const eventImgPath = "/assets/imgs" + event.image_path.split(".")[0] + "_large." + imageExtension;
        const eventDate = new Date(event.date);

        $("#next-event-a-tag").attr("href", event.url);
        $("#next-event-img").attr("src", eventImgPath);
        $("#next-event-title").html(event.name);
        $("#next-event-date").html(eventDate.toDateString());
    });
}

$(document).ready( () =>{
    fillNextEventSection();
});