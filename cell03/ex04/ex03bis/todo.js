$(function () {

    function setCookie(name, value) {
        document.cookie = name + "=" + value;
    }

    function getCookie(name) {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i].trim();
            if (c.indexOf(name + "=") == 0)
                return c.substring(name.length + 1);
        }
        return "";
    }

    function save() {
        var list = [];
        $("#ft_list div").each(function () {
            list.push($(this).text());
        });
        setCookie("todo", list.join("|"));
    }

    function load() {
        var data = getCookie("todo");
        if (data) {
            var items = data.split("|");
            for (var i = 0; i < items.length; i++) {
                add(items[i]);
            }
        }
    }

    function add(text) {
        var div = $("<div>").text(text);
        div.click(function () {
            if (confirm("Delete this item?")) {
                $(this).remove();
                save();
            }
        });
        $("#ft_list").prepend(div);
    }

    $("#new").click(function () {
        var t = prompt("New TO DO:");
        if (t) {
            add(t);
            save();
        }
    });

    load();
});
