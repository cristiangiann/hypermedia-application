$(document).ready(function () {
    $.get("/pages/footer.html", function (data) {
        $("body > script:first").before(data);
    }, "html");
})