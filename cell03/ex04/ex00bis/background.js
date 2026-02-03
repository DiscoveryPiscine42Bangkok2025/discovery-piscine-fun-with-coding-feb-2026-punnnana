$(document).ready(function () {
    $("body").click(function () {
        var colors = ["red", "green", "blue"];
        var random = colors[Math.floor(Math.random() * colors.length)];
        $("body").css("background-color", random);
    });
});
