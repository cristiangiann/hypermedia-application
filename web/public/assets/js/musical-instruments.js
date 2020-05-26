"use strict";


let instruments = sessionStorage.instruments;
let instrumentTypes = sessionStorage.instrumentTypes;
let regions = sessionStorage.regions;

// Fetching instruments
function fetchInstruments() {
    const getURL = "/api/musical-instruments";
    if (instruments == null) {
        // AJAX call
        $.get(getURL, (data) => {
            instruments = data;
            sessionStorage.instruments = JSON.stringify(instruments);
            drawInstruments("all-types", "all-regions");
        });
    } else {
        instruments = JSON.parse(instruments);
        drawInstruments("all-types", "all-regions");
    }
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
    if (regions == null) {
        // AJAX call
        $.get(getURL, (data) => {
            regions = data;
            sessionStorage.regions = JSON.stringify(regions);
            drawRegions();
        });
    } else {
        regions = JSON.parse(regions);
        drawRegions();
    }
}

function drawRegions() {
    let htmlString = "";
    regions.forEach( region => {
        htmlString += '<option value="' + region.id.toString() +'">' + region.name + '</option>';
    });
    $("#regions-list").append(htmlString);
}

// Fetching instrument types
function fetchInstrumentTypes() {
    const getURL = "/api/instrument-types"
    if (instrumentTypes == null) {
        // AJAX call
        $.get(getURL, (data) => {
            instrumentTypes = data;
            sessionStorage.instrumentTypes = JSON.stringify(instrumentTypes);
            drawInstrumentTypes();
        });
    } else {
        instrumentTypes = JSON.parse(instrumentTypes);
        drawInstrumentTypes();
    }
}

function drawInstrumentTypes() {
    let htmlString = "";
    instrumentTypes.forEach( type => {
        htmlString += '<option value="' + type.id.toString() + '">' + type.name + '</option>';
    });
    $("#types-list").append(htmlString);
}

$(document).ready( () =>{
    fetchInstruments();
    fetchRegions();
    fetchInstrumentTypes();

    $("#types-list, #regions-list").change(function() {
        const type = $("#types-list > option:selected").attr("value");
        const region = $("#regions-list > option:selected").attr("value");
        drawInstruments(type, region);
    })
})