"use strict";


let nextEvents = [];
let pastEvents = [];


function fetchEvents() {
    const getNextEventsURL = "/api/nextEvents";
    const getPastEventsURL = "/api/pastEvents";
    // AJAX call
    $.get(getNextEventsURL, (data) => {
        data.forEach(ev => {ev.date = new Date(ev.date);});
        nextEvents = data;
        drawNextEvents("all-months");
    });
    $.get(getPastEventsURL, (data) => {
        data.forEach(ev => {ev.date = new Date(ev.date);});
        pastEvents = data;
        drawPastEvents("all-months");
    })
}

function drawNextEvents(filter) {
    let filteredArray = filterEventsByMonth(nextEvents, filter);
    let htmlString = drawEvents(filteredArray);
    $("#next-events-container").html(htmlString);
}

function drawPastEvents(filter) {
    let filteredArray = filterEventsByMonth(pastEvents, filter);
    let htmlString = drawEvents(filteredArray);
    $("#past-events-container").html(htmlString);
}

function filterEventsByMonth(events, month) {
    return (month === "all-months") ? events : events.filter(event => event.date.getMonth() == month-1);
}

function drawEvents(events) {
    let htmlString = "";
    events.forEach( event => {
        const eventURL = "/event?id=" + event.id.toString();
        const eventName = event.name;
        const eventDate = event.date;
        const eventDescription = event.description;
        const eventImgPath = "../assets/imgs" + event.image_path;

        const dateStrings = eventDate.toDateString().split(' ');
        const dateDay = dateStrings[2];
        const dateMonth = dateStrings[1];
        const dateYear = dateStrings[3];
        
        htmlString +=                     
                    '<!-- Event item -->' +
                    '<div class="row mx-0 event-item align-items-center">' +
                    '    <!-- Image -->' +
                    '    <div class="col-md-2 order-2 order-md-1 px-3 px-sm-0">' +
                    '        <img src="' + eventImgPath + '" alt="' + eventName + '" loading="lazy">' +
                    '    </div>' +
                    '    <!-- Title, date and description -->' +
                    '    <div class="col-md-10 order-1 order-md-2 event-details pl-md-1">' +
                    '        <div class="container-fluid">' +
                    '            <div class="row mx-0 event-name text-center">' +
                    '                <a href="' + eventURL + '"> <h3 class="text-center">' + eventName + '</h3> </a>' +
                    '            </div>' +
                    '            <div class="row mx-0 mt-lg-2">' +
                    '                <div class="col-md-1 text-center order-1 px-0 align-self-center event-date">' +
                    '                    <h3>' + dateDay + '</h3>' +
                    '                    <h6>' + dateMonth + ' ' + dateYear + '</h6>' +
                    '                </div>' +
                    '                <div class="col-md-11 order-2 event-description">' + eventDescription + '</div>' +
                    '            </div>' +
                    '        </div>' +
                    '    </div>' +
                    '</div>';
    });
    return htmlString;
}

$(document).ready( () =>{
    fetchEvents();

    $("#month-select").change(function() {
        let month = $("#month-select > option:selected").attr("value");
        drawNextEvents(month);
        drawPastEvents(month);
    })
})