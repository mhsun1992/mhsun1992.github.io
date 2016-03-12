(function () {
    $(window).scroll(function() {
        if ($(window).scrollTop()) {
            $("footer").slideDown();
        } else {
            $("footer").slideUp();
        }
    });
})();
