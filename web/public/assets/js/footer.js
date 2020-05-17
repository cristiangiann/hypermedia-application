$(document).ready(function () {
    $.get("/pages/footer.html", function (data) {
        $("body").append("")
        $("body").append("<!-- Footer section-->")
        $("body").append(data)
    }, "html")
})