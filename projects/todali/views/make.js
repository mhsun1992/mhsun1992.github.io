(function () {
    $(".select .box").click(function () {
        if ($(this).hasClass("selected")) {
            return;
        }

        $(this).parent().find(".box").removeClass("selected");
        $(this).addClass("selected");

        var selected = $(".handrail .selected").data("index") + "-" + $(".skin .selected").data("index") + "-" + $(".material .selected").data("index");
        console.log(selected);
        //$(".view img").attr("src", "ss");
    });
})();
