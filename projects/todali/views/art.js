(function () {
    $(".select-one").click(function () {
        $(".select-one").addClass('selected');
        $(".select-two").removeClass('selected');
        $(".detail-two").hide();
        $(".detail-one").show();
    });
    $(".select-two").click(function () {
        $(".select-two").addClass('selected');
        $(".select-one").removeClass('selected');
        $(".detail-one").hide();
        $(".detail-two").show();
    });
})();
