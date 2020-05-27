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
    drawEvents(filteredArray, "#next-events-container");
}

function drawPastEvents(filter) {
    let filteredArray = filterEventsByMonth(pastEvents, filter);
    drawEvents(filteredArray, "#past-events-container");
}

function filterEventsByMonth(events, month) {
    return (month === "all-months") ? events : events.filter(event => event.date.getMonth() == month-1);
}

function drawEvents(events, containerName) {
    let template = $("#event-item-template").html();
    $(containerName).html("");
    events.forEach( event => {
        let $eventItem = $(template);
        const eventURL = "/event?id=" + event.id.toString();
        const eventName = event.name;
        const eventDate = event.date;
        const eventDescription = event.description;
        const eventImgPath = "../assets/imgs" + event.image_path;

        const dateStrings = eventDate.toDateString().split(' ');
        const dateDay = dateStrings[2];
        const dateMonth = dateStrings[1];
        const dateYear = dateStrings[3];
        
        $eventItem.find("img").attr("src", eventImgPath).attr("alt", eventName);
        $eventItem.find("a").attr("href", eventURL);
        $eventItem.find(".event-name h3").text(eventName);
        $eventItem.find(".event-date > h3").text(dateDay);
        $eventItem.find(".event-date > h6").text(dateMonth + " " + dateYear);
        $eventItem.find(".event-description").html(eventDescription);

        $(containerName).append($eventItem);
    });
}

$(document).ready( () =>{
    fetchEvents();

    $("#month-select").change(function() {
        let month = $("#month-select > option:selected").attr("value");
        drawNextEvents(month);
        drawPastEvents(month);
    })
})