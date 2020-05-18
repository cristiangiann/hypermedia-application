let addHeader = function(completionHandler = function() {}) {
    $.get("../../pages/header.html", function (data) {
        $("#page-content").prepend("<!-- Content -->\n");
        $("#page-content").prepend(data);
        $("#page-content").prepend("<!-- Header section-->");
        $("#page-content").prepend("");
        $("#page-content").append("<div id=\"push\"></div>");
        completionHandler();
    }, "html");
};

let activateNavItem = function() {
    let pageName = $("meta[name='keywords']").attr("content");
    let navItem = $("#"+pageName);
    navItem.addClass("active");
}

$(document).ready(function() {
    addHeader(activateNavItem);
});