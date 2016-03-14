var product_list = [
    {name: "双人款沙发椅", material: "沙发整体框架为楸木。大宝油漆喷涂", size: "W1630*D870*H890", weight: "51.6KG", rmb: "9400（人民币）", images: [
        "./views/images/art/list/1-1.png",
        "./views/images/art/list/1-2.png"
    ]},
    {name: "高背沙发椅", material: "沙发内部框架为桦木与多层板。脚为桦木。大宝油漆喷涂", size: "W730*D800*H1070", weight: "23.6KG", rmb: "2600（人民币）", images: [
        "./views/images/art/list/2-1.png",
        "./views/images/art/list/2-2.png"
    ]},
    {name: "高背沙发椅", material: "沙发内部框架为桦木与多层板。脚为桦木与不锈钢结合。大宝油漆喷涂", size: "W750*D800*H1070", weight: "23.4KG", rmb: "4200（人民币）", images: [
        "./views/images/art/list/3-1.png",
        "./views/images/art/list/3-2.png"
    ]},
    {name: "沙发椅", material: "沙发内部框架为桦木与多层板.脚为桦木。大宝油漆喷涂", size: "W760*D830*H880", weight: "25.1KG", rmb: "2200（人民币）", images: [
        "./views/images/art/list/4-1.png",
        "./views/images/art/list/4-2.png"
    ]},
    {name: "老榆木单人椅", material: "沙发框架为老榆木。大宝油漆喷涂 ", size: "W660*D620*H700", weight: "6.2KG", rmb: "1290（人民币）", images: [
        "./views/images/art/list/5-1.png",
        "./views/images/art/list/5-2.png"
    ]},
    {name: "单人椅", material: "沙发内部框架为多层板。脚架为美国白蜡木。大宝油漆喷涂", size: "W550*D570*H850", weight: "5.7KG", rmb: "1080（人民币）", images: [
        "./views/images/art/list/6-1.png",
        "./views/images/art/list/6-2.png"
    ]},
    {name: "单人椅", material: "沙发框架为桦木。大宝油漆喷涂", size: "W550*D520*H750", weight: "5.7KG", rmb: "1360（人民币）", images: [
        "./views/images/art/list/7-1.png",
        "./views/images/art/list/7-2.png"
    ]},
    {name: "单人椅", material: "沙发框架为美国白蜡木。大宝油漆喷涂", size: "W450*D520*H810", weight: "4.8KG", rmb: "870（人民币）", images: [
        "./views/images/art/list/8-1.png",
        "./views/images/art/list/8-2.png"
    ]},
    {name: "单人椅", material: "沙发内部框架为桦木与多层板.脚为桦木。大宝油漆喷涂", size: "W580*D530*H820", weight: "9.6KG", rmb: "870（人民币）", images: [
        "./views/images/art/list/9-1.png",
        "./views/images/art/list/9-2.png"
    ]},
];

(function () {
    $(".select-one").click(function () {
        $(".select-one").addClass("selected");
        $(".select-two").removeClass("selected");
        $(".detail-two").hide();
        $(".detail-one").show();
    });
    $(".select-two").click(function () {
        $(".select-two").addClass("selected");
        $(".select-one").removeClass("selected");
        $(".detail-one").hide();
        $(".detail-two").show();
    });

    $("#slides").slides({width: "100%", height: 450});
    $("#slides").slides("play");
    $(".slidesPaginationItem").click(function () {
        $("#slides").slides("stop");
    }); 

    $(".images").slides({width: "100%", height: 450});
    $(".slidesNavigation").click(function () {
        var index = $(".images").slides("status").current;
        $($(".images img")[index]).css("display", "none");
    });

    $(".product .list li").click(function () {
        var product = product_list[$(this).data("index")];
        $(".mask").css("display", "block");
        $(".item").css("display", "block");

        $(".item .name").text(product.name);
        $(".item .material").text(product.material);
        $(".item .size").text(product.size);
        $(".item .weight").text(product.weight);
        $(".item .rmb").text(product.rmb);
        $(".item .image-1").attr("src", product.images[0])
        $(".item .image-2").attr("src", product.images[1])
    });
    $(".product .item .close").click(function () {
        $(".mask").css("display", "none");
        $(".item").css("display", "none");
    });
})();
