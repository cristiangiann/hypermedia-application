"use strict";


$(document).ready( () =>{
    const postURL = "/api/send-email";
    $("#contact-form").submit(function(event) {
        const data = $("#contact-form").serialize();

        // Stop form from submitting normally
        event.preventDefault();

        var jqxhr = $.post(postURL, data).done(onSuccess);
    });
});

let onSuccess = function() {
    $("#submit-button, #submit-success").fadeToggle().delay(2000).fadeToggle();
    // reset
    $("input, textarea").each(function() {$(this).val("")});
}