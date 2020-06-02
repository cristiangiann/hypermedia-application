"use strict";


$(document).ready( () =>{
    const postURL = "/api/send-email";
    $("#contact-form").submit(function(event) {
        // Stop form from submitting normally
        event.preventDefault();

        const data = $("#contact-form").serialize();

        var jqxhr = $.post(postURL, data)
        jqxhr.done(onSuccess);
    });
});

let onSuccess = async function() {
    $("#submit-button").toggleClass("btn-success custom-form-borders custom-btn").text("Sent");
    $("input, textarea").each(function() {$(this).val("")});
    await new Promise(r => setTimeout(r, 1500));
    $("#submit-button").toggleClass("btn-success custom-form-borders custom-btn").text("Submit");
}