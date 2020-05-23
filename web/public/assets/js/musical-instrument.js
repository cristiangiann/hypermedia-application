"use strict";



// Fetching an instrument from APIs
function fetchInstrument(id) {
    const getURL = "/api/musical-instruments/"+id.toString();
    // AJAX call
    $.get(getURL, (instrument) => {

        const instrumentName = instrument.name;
        const instrumentDescription = instrument.description;
        const instrumentHistory = instrument.history;
        const instrumentImgPath = "../assets/imgs" + instrument.image_path;
        const courseID = instrument.course.id;
        const relatedInstruments = instrument.related_instruments;

        $("head > title, #instrument-title").text(instrumentName);
        $("#instrument-image").attr("src", instrumentImgPath);
        $("#instrument-image").attr("alt", instrumentName);
        $("#instrument-description").html(instrumentDescription);
        $("#instrument-history").html(instrumentHistory);
        $("#related-instruments").html(getRelatedMusicalInstrumentsHTML(relatedInstruments));

    });
}

function getRelatedMusicalInstrumentsHTML(instruments) {
    let htmlString = "";
    instruments.forEach(instrument => {
        const instrumentLink = "/musical-instrument?id=" + instrument.id.toString();
        const instrumentName = instrument.name;
        const instrumentImgPath = "../assets/imgs" + instrument.image_path;
        htmlString += 
                    '<a href="' + instrumentLink + '" class="col-lg-2 col-md-3 col-sm-4 col-5 px-auto mx-auto mx-sm-2 px-sm-2 mb-2">' +
                    '   <div class="my-2 card border-0 bg-transparent">' + 
                    '       <img src="' + instrumentImgPath + '" class="card-img-top img-fluid" alt="' + instrumentName + '">' +
                    '       <div class="card-body p-0 text-center">' +
                    '           <h6 class="card-text nowrap">' + instrumentName + '</h6>' +
                    '       </div>' +
                    '   </div>' +
                    '</a>';
    });
    return htmlString;
}

$(document).ready( () =>{
    const params = new URLSearchParams(location.search);
    const key = 'id';
    if (params.has(key)) fetchInstrument(params.get(key));
})