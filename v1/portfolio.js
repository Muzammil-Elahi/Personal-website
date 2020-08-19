if (jQuery) {
    alert("jQuery loaded")
} else {
    alert("jQuery not loaded")
}
/* $("#nav-softDev-tab").addClass("active"); // starts as active for some reason
$("#nav-softDev-tab").toggleClass("active");
$("#nav-softDev-tab").on("click", function() {
    if ($("#nav-softDev-tab").hasClass("active")) {
        $("#nav-softDev-tab").toggleClass("active"); // deactive tab
    } else {
        $("#nav-softDev-tab").toggleClass("active");
        $('#nav-softDev-tab').tab('show');
        $("#nav-dataSci-tab").toggleClass("active");
    }
});
$("#nav-dataSci-tab").on("click", function() {
    if ($("#nav-dataSci-tab").hasClass("active")) {
        $("#nav-dataSciDev-tab").toggleClass("active"); // un highlight tab
    } else {
        $("#nav-softDev-tab").toggleClass("active");
        $('#nav-dataSci-tab').tab('show');
        $("#nav-dataSci-tab").toggleClass("active");
    }
}); */
$(function() {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function() {
        navMain.collapse('hide');
    });
});
