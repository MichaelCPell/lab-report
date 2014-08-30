var map = {17: false, 32: false, 78: false, 80: false};
$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[17] && map[80]) {
            window.location = "/#!/reports"
        }

        if (map[17] && map[78]) {
            window.location = "/#!/reports/new"
        }

        if (map[17] && map[32]) {
          $("#navTree").data("kendoTreeView").wrapper.focus()
        }

    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});