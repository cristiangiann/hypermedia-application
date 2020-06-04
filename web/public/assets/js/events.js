"use strict";


let nextEvents = [];
let pastEvents = [];


function fetchEvents() {
    const getNextEventsURL = "/api/nextEvents";
    const getPastEventsURL = "/api/pastEvents";
    // AJAX calls
    $.when(
        $.get(getNextEventsURL, (data) => {
            data.forEach(ev => {ev.date = new Date(ev.date);});
            nextEvents = data;
            drawNextEvents("all-months");
        }),
        $.get(getPastEventsURL, (data) => {
            data.forEach(ev => {ev.date = new Date(ev.date);});
            pastEvents = data;
            drawPastEvents("all-months");
        })
    ).done(hideMonths).then(function() {
        $(".event-row").hover(function() {
            $(this).find("a").css( "text-decoration", "underline" );
        }, function() {
            $(this).find("a").css( "text-decoration", "none" );
        });
    });
    
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
        const eventName = event.name;
        const eventDate = event.date;
        const eventDescriptionParagraphs = event.description.split("\\n");
        const eventImgPath = "../assets/imgs" + event.image_path;

        const dateStrings = eventDate.toDateString().split(' ');
        const dateDay = dateStrings[2];
        const dateMonth = dateStrings[1];
        const dateYear = dateStrings[3];
        
        $eventItem.find("img").attr("src", eventImgPath).attr("alt", eventName);
        $eventItem.find("a").attr("href", event.url);
        $eventItem.find(".event-name h3").text(eventName);
        $eventItem.find(".event-date > h3").text(dateDay);
        $eventItem.find(".event-date > h6").text(dateMonth + " " + dateYear);
        eventDescriptionParagraphs.forEach(par => $("<p></p>").text(par).appendTo(".event-description"));

        $(containerName).append($eventItem);
    });
}

function hideMonths() {
    // hides months in the select form which haven't got an event associated
    $("#month-select > option[value!='all-months']").each(function() {
        // get only the months associated with an event, iterating the events arrays
        // getting the month representation of each event date (starting from 0) and
        // transforming it in the range [1...12], then transform into a string this number
        // for a equality check with the attribute "value" of the <option> tag
        let usefulMonths = nextEvents.map( event => (event.date.getMonth()+1).toString() )
                                        .concat( 
                                            pastEvents.map( event => (event.date.getMonth()+1).toString() ) 
                                        );
        if (!usefulMonths.includes($(this).attr("value"))) $(this).toggle();
    });
}

$(document).ready( () =>{
    fetchEvents();

    $("#month-select").change(function() {
        let month = $("#month-select > option:selected").attr("value");
        drawNextEvents(month);
        drawPastEvents(month);
    });

    $("a[data-toggle=collapse]").bind('click dblclick', function() {
        $(this).find("svg.bi-chevron-right").toggleClass("expanded").toggleClass("unexpanded");
    });
});