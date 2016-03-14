(function () {
    $(".select .box.active").click(function () {
        if ($(this).hasClass("selected")) {
            return;
        }

        $(this).parent().find(".box").removeClass("selected");
        $(this).addClass("selected");

        var skin = $(".skin .box.selected").data("index"),
            material = $(".material .box.selected").data("index"),
            handrail = $(".handrail .box.selected").data("index");

        if (skin == 1) {
            $(".view .selected").css("background-image", "url(" + './views/images/make/view-1.png' + ")");
        } else if (skin == 2) {
            $(".view .selected").css("background-image", "url(" + './views/images/make/view-2.png' + ")");
        } else {
            $(".view .selected").css("background-image", "url(" + './views/images/make/view-3.png' + ")");
        }

        if (material == 1) {
            $(".view .selected").css("background-position-x", "2%");
        } else if (material == 2) {
            $(".view .selected").css("background-position-x", "49%");
        } else {
            $(".view .selected").css("background-position-x", "96%");
        }

        if (handrail == 1) {
            $(".view .selected").css("background-position-y", "50%");
        } else if (handrail == 2) {
            $(".view .selected").css("background-position-y", "100%");
        } else {
            $(".view .selected").css("background-position-y", "0%");
        }
    });
})();
