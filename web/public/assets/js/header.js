$(document).ready(function () {
    $.get("/pages/header.html", function (data) {
        $("#page-content").prepend("<!-- Content -->\n");
        $("#page-content").prepend(data);
        $("#page-content").prepend("<!-- Header section-->");
        $("#page-content").prepend("");
        $("#page-content").append("<div id=\"push\"></div>");
    }, "html");
});