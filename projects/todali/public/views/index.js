(function () {
    $("#slides").slides({
        width: '100%',
        height: 450,
    });
    $("#slides").slides("play");
    $(".slidesPaginationItem").click(function () {
        $("#slides").slides("stop");
    });
})();
