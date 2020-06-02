"use strict";


let instrumentsMap = sessionStorage.instrumentsMap;

// Fetching an instrument from APIs
function fetchInstrument(id) {
    const getURL = "/api/musical-instruments/"+id.toString();
    let instrument = instrumentsMap.get(id);
    if (instrument == null) {
        // AJAX call
        $.get(getURL, (instrument) => {
            instrumentsMap.set(id, instrument);
            sessionStorage.instrumentsMap = instrumentsMap;
        });
    }
    drawInstrument(instrument);
}

function drawInstrument(instrument) {
    const instrumentName = instrument.name;
    const instrumentDescription = instrument.description;
    const instrumentHistory = instrument.history;
    const instrumentImgPath = "../assets/imgs" + instrument.image_path;
    const courseID = instrument.course.id;
    const relatedInstruments = instrument.related_instruments;
    const $courseButton = $("#instrument-course-link");

    $("head > title").html(instrumentName + " - Lemon Peel Association");
    $("#instrument-title").text(instrumentName);
    $("#instrument-image").attr("src", instrumentImgPath);
    $("#instrument-image").attr("alt", instrumentName);
    $("#instrument-description").html(instrumentDescription);
    $("#instrument-history").html(instrumentHistory);
    $("#instrument-type").text(instrument.type);
    $("#instrument-region").text(instrument.region);
    if (courseID != null && courseID != undefined) {
        $courseButton.attr("href", instrument.course.url);
        $courseButton.toggle();
    }
    getRelatedMusicalInstrumentsHTML(relatedInstruments);
}

function getRelatedMusicalInstrumentsHTML(instruments) {
    let template = $("#related-instrument-template").html();
    
    instruments.forEach(instrument => {
        const instrumentName = instrument.name;
        const instrumentImgPath = "../assets/imgs" + instrument.image_path;

        let $instrumentItem = $(template);
        $instrumentItem.attr("href", instrument.url);
        $instrumentItem.find("img").attr("src", instrumentImgPath);
        $instrumentItem.find("img").attr("alt", instrumentName);
        $instrumentItem.find(".card-text").text(instrumentName);
        console.log($instrumentItem);
        $("#related-instruments").append($instrumentItem);
    });
}

$(document).ready( () => {
    if (instrumentsMap == null) instrumentsMap = new Map();
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchInstrument(params.get(key));
})