"use strict";


let instruments = [];

// Fetching instruments
function fetchInstruments() {
    const getURL = "/api/musical-instruments";
    // AJAX call
    $.get(getURL, (data) => {
        data.forEach( instrument => {
            instruments.push(instrument);
        });
        drawInstruments("all-types", "all-regions");
    });
}

function drawInstruments(type, region) {
    let filteredArray = (type === "all-types") ? instruments : instruments.filter(instrument => (instrument.instrument_type_id == type));
        filteredArray = (region === "all-regions") ? filteredArray : filteredArray.filter(instrument => (instrument.italian_region_id == region));
    let htmlString = "";

    filteredArray.forEach( instrument => {
        htmlString += 
        '<a href="/musical-instrument?id=' + instrument.id.toString() + '" class="col-lg-2 col-md-3 col-sm-4 col-5 px-auto mx-auto mx-sm-2 px-sm-2 mb-2">' +
        '    <div class="course-item my-2 card border-0 bg-transparent">' +
        '        <img src="../assets/imgs' + instrument.image_path + '" class="card-img-top" alt="' + instrument.name + '">' +
        '        <div class="card-body p-0 text-center">' +
        '            <h5 class="card-text">' + instrument.name +'</h5>' +
        '        </div>' +
        '    </div>' +
        '</a>';
    });
    $("#instruments-section").html(htmlString);
}

// Fetching Italian Regions from APIs
function fetchRegions() {
    const getURL = "/api/regions";
    // AJAX call
    $.get(getURL, (data) => {
        let htmlString = "";
        data.forEach( region => {
            htmlString += '<option value="' + region.id.toString() +'">' + region.name + '</option>';
        });
        $("#regions-list").append(htmlString);
    });
}

// Fetching instrument types
function fetchInstrumentTypes() {
    const getURL = "/api/instrument-types"
    // AJAX call
    $.get(getURL, (data) => {
        let htmlString = "";
        data.forEach( type => {
            htmlString += '<option value="' + type.id.toString() + '">' + type.name + '</option>';
        });
        $("#types-list").append(htmlString);
    });
}

$(document).ready( () =>{
    fetchInstruments();
    fetchRegions();
    fetchInstrumentTypes();

    $("#types-list, #regions-list").change(function() {
        const type = $("#types-list > option:selected").attr("value");
        const region = $("#regions-list > option:selected").attr("value");
        console.log(type);
        console.log(region);
        drawInstruments(type, region);
    })
})