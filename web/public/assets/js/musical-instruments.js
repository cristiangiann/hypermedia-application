"use strict";


let instruments = sessionStorage.instruments;
let instrumentTypes = sessionStorage.instrumentTypes;
let regions = sessionStorage.regions;
const allTypesValue = "all-types";
const allRegionsValue = "all-regions";

// Fetching instruments
function fetchInstruments() {
    const getURL = "/api/musical-instruments";
    if (instruments == null) {
        // AJAX call
        $.get(getURL, (data) => {
            instruments = data;
            sessionStorage.instruments = JSON.stringify(instruments);
            drawInstruments(allTypesValue, allRegionsValue);
        });
    } else {
        instruments = JSON.parse(instruments);
        drawInstruments(allTypesValue, allRegionsValue);
    }
}

function drawInstruments(type, region) {
    let filteredArray = (type === allTypesValue) ? instruments : instruments.filter(instrument => (instrument.instrument_type_id == type));
        filteredArray = (region === allRegionsValue) ? filteredArray : filteredArray.filter(instrument => (instrument.italian_region_id == region)); 
    let template = $("#instrument-item").html();
    $("#instruments-section").html(""); // clears the section, this is needed for filtering purposes
    filteredArray.forEach( instrument => {
        let $row = $(template);
        let $img = $row.find("img")
        $row.attr("href", "/musical-instrument?id="+instrument.id.toString());
        $row.find(".card-text").text(instrument.name);
        $img.attr("src", "../assets/imgs" + instrument.image_path);
        $img.attr("alt", instrument.name);

        $("#instruments-section").append($row);
    });
}

// Fetching Italian Regions from APIs
function fetchRegions() {
    const getURL = "/api/regions";
    if (regions == null) {
        // AJAX call
        $.get(getURL, (data) => {
            regions = data;
            regions.unshift({"id": allRegionsValue, "name": "All regions"});
            sessionStorage.regions = JSON.stringify(regions);
            drawRegions();
        });
    } else {
        regions = JSON.parse(regions);
        drawRegions();
    }
}

function drawRegions(array) {
    let template = $("#select-rows").html();
    $("#regions-list").html("");
    if (array == null) array = regions;
    array.forEach( region => {
        let $row = $(template);
        $row.attr("value", region.id.toString());
        $row.text(region.name);
        $("#regions-list").append($row);
    });
}

// Fetching instrument types
function fetchInstrumentTypes() {
    const getURL = "/api/instrument-types"
    if (instrumentTypes == null) {
        // AJAX call
        $.get(getURL, (data) => {
            instrumentTypes = data;
            instrumentTypes.unshift({"id": allTypesValue, "name": "All types"});
            sessionStorage.instrumentTypes = JSON.stringify(instrumentTypes);
            drawInstrumentTypes();
        });
    } else {
        instrumentTypes = JSON.parse(instrumentTypes);
        drawInstrumentTypes();
    }
}

function drawInstrumentTypes(array) {
    let template = $("#select-rows").html();
    $("#types-list").html("");
    if (array == null) array = instrumentTypes;
    array.forEach( type => {
        let $row = $(template);
        $row.attr("value", type.id.toString());
        $row.text(type.name);
        $("#types-list").append($row);
    });
}

$(document).ready( () =>{
    fetchInstruments();
    fetchRegions();
    fetchInstrumentTypes();

    $("#types-list, #regions-list").change(function() {
        const type = $("#types-list > option:selected").attr("value");
        const region = $("#regions-list > option:selected").attr("value");
        drawInstruments(type, region);
    });

    $("#types-list").change(function() {
        const typeID = $("#types-list > option:selected").attr("value");
        if (typeID == allTypesValue) $("#regions-list > option").show();
        else {
            $("#regions-list > option").each((_, region) => {
                const elem = $(region);
                const regionID = elem.attr("value");
                if (regionID != allRegionsValue) {
                    if (!instruments.some(i => (i.italian_region_id == regionID && i.instrument_type_id == typeID))) elem.hide();
                    else elem.show();
                }
            });
        }
    });

    $("#regions-list").change(function() {
        const regionID = $("#regions-list > option:selected").attr("value");
        if (regionID == allRegionsValue) $("#types-list > option").show();
        else {
            $("#types-list > option").each((_, type) => {
                const elem = $(type);
                const typeID = elem.attr("value");
                if (typeID != allTypesValue) {
                    if (!instruments.some(i => (i.italian_region_id == regionID && i.instrument_type_id == typeID))) elem.hide();
                    else elem.show();
                }
            });
        }
    });
})